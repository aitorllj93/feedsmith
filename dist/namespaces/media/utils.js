import { isNonEmptyStringOrNumber, isObject, isPresent, parseArrayOf, parseBoolean, parseCsvOf, parseNumber, parseSingularOf, parseString, parseTextString, retrieveText, trimArray, trimObject, } from '../../common/utils.js';
export const parseRating = (value) => {
    const rating = {
        value: parseString(retrieveText(value)),
        scheme: parseString(value?.['@scheme']),
    };
    if (isPresent(rating.value)) {
        return trimObject(rating);
    }
};
export const retrieveRatings = (value) => {
    if (!isObject(value)) {
        return;
    }
    if (value['media:rating']) {
        return parseArrayOf(value['media:rating'], parseRating);
    }
    // Handle migration from media:adult to media:rating:
    // <media:adult>true</media:adult> → <media:rating scheme="urn:simple">adult</media:rating>
    // <media:adult>false</media:adult> → <media:rating scheme="urn:simple">nonadult</media:rating>
    if (value['media:adult']) {
        const isAdult = parseBoolean(retrieveText(value['media:adult']));
        const rating = {
            value: isAdult ? 'adult' : 'nonadult',
            scheme: 'urn:simple',
        };
        return [rating];
    }
};
export const parseTitleOrDescription = (value) => {
    const title = {
        value: parseString(retrieveText(value)),
        type: parseString(value?.['@type']),
    };
    if (isPresent(title.value)) {
        return trimObject(title);
    }
};
export const parseThumbnail = (value) => {
    if (!isObject(value)) {
        return;
    }
    const thumbnail = {
        url: parseString(value['@url']),
        height: parseNumber(value['@height']),
        width: parseNumber(value['@width']),
        time: parseString(value['@time']),
    };
    if (isPresent(thumbnail.url)) {
        return trimObject(thumbnail);
    }
};
export const parseCategory = (value) => {
    const category = {
        name: parseString(retrieveText(value)),
        scheme: parseString(value?.['@scheme']),
        label: parseString(value?.['@label']),
    };
    if (isPresent(category.name)) {
        return trimObject(category);
    }
};
export const parseHash = (value) => {
    const hash = {
        value: parseString(retrieveText(value)),
        algo: parseString(value?.['@algo']),
    };
    if (isPresent(hash.value)) {
        return trimObject(hash);
    }
};
export const parsePlayer = (value) => {
    if (!isObject(value)) {
        return;
    }
    const player = {
        url: parseString(value['@url']),
        height: parseNumber(value['@height']),
        width: parseNumber(value['@width']),
    };
    if (isPresent(player.url)) {
        return trimObject(player);
    }
};
export const parseCredit = (value) => {
    const credit = {
        value: parseString(retrieveText(value)),
        role: parseString(value?.['@role']),
        scheme: parseString(value?.['@scheme']),
    };
    if (isPresent(credit.value)) {
        return trimObject(credit);
    }
};
export const parseCopyright = (value) => {
    const copyright = {
        value: parseString(retrieveText(value)),
        url: parseString(value?.['@url']),
    };
    if (isPresent(copyright.value)) {
        return trimObject(copyright);
    }
};
export const parseText = (value) => {
    const text = {
        value: parseString(retrieveText(value)),
        type: parseString(value?.['@type']),
        lang: parseString(value?.['@lang']),
        start: parseString(value?.['@start']),
        end: parseString(value?.['@end']),
    };
    if (isPresent(text.value)) {
        return trimObject(text);
    }
};
export const parseRestriction = (value) => {
    if (!isObject(value)) {
        return;
    }
    const restriction = {
        value: parseString(retrieveText(value)),
        relationship: parseString(value['@relationship']),
        type: parseString(value['@type']),
    };
    if (isPresent(restriction.value) && isPresent(restriction.relationship)) {
        return trimObject(restriction);
    }
};
export const parseStarRating = (value) => {
    if (!isObject(value)) {
        return;
    }
    const starRating = {
        average: parseNumber(value['@average']),
        count: parseNumber(value['@count']),
        min: parseNumber(value['@min']),
        max: parseNumber(value['@max']),
    };
    return trimObject(starRating);
};
export const parseStatistics = (value) => {
    if (!isObject(value)) {
        return;
    }
    const statistics = {
        views: parseNumber(value['@views']),
        favorites: parseNumber(value['@favorites']),
    };
    return trimObject(statistics);
};
export const parseTags = (value) => {
    if (!isNonEmptyStringOrNumber(value)) {
        return;
    }
    const segments = parseString(value)?.split(',');
    if (segments) {
        return trimArray(segments, (segment) => {
            const split = segment.split(':');
            return {
                name: parseString(split[0]) ?? '',
                weight: parseNumber(split[1]) ?? 1,
            };
        });
    }
};
export const parseCommunity = (value) => {
    if (!isObject(value)) {
        return;
    }
    const community = {
        starRating: parseSingularOf(value['media:starrating'], parseStarRating),
        statistics: parseSingularOf(value['media:statistics'], parseStatistics),
        tags: parseSingularOf(value['media:tags'], parseTags),
    };
    return trimObject(community);
};
export const parseComments = (value) => {
    return parseArrayOf(value?.['media:comment'], parseTextString);
};
export const parseParam = (value) => {
    if (!isObject(value)) {
        return;
    }
    const param = {
        name: parseString(value['@name']),
        value: parseString(retrieveText(value)),
    };
    if (isPresent(param.name) && isPresent(param.value)) {
        return param;
    }
};
export const parseEmbed = (value) => {
    if (!isObject(value)) {
        return;
    }
    const embed = {
        url: parseString(value['@url']),
        width: parseNumber(value['@width']),
        height: parseNumber(value['@height']),
        params: parseArrayOf(value['media:param'], parseParam),
    };
    if (isPresent(embed.url)) {
        return trimObject(embed);
    }
};
export const parseResponses = (value) => {
    return parseArrayOf(value?.['media:response'], parseTextString);
};
export const parseBackLinks = (value) => {
    return parseArrayOf(value?.['media:backlink'], parseTextString);
};
export const parseStatus = (value) => {
    if (!isObject(value)) {
        return;
    }
    const status = {
        state: parseString(value['@state']),
        reason: parseString(value['@reason']),
    };
    if (isPresent(status.state)) {
        return trimObject(status);
    }
};
export const parsePrice = (value) => {
    if (!isObject(value)) {
        return;
    }
    const price = {
        type: parseString(value['@type']),
        info: parseString(value['@info']),
        price: parseNumber(value['@price']),
        currency: parseString(value['@currency']),
    };
    if (isPresent(price.type)) {
        return trimObject(price);
    }
};
export const parseLicense = (value) => {
    const license = {
        name: parseString(retrieveText(value)),
        type: parseString(value?.['@type']),
        href: parseString(value?.['@href']),
    };
    if (isPresent(license.name) || isPresent(license.href)) {
        return trimObject(license);
    }
};
export const parseSubTitle = (value) => {
    if (!isObject(value)) {
        return;
    }
    const subTitle = {
        type: parseString(value['@type']),
        lang: parseString(value['@lang']),
        href: parseString(value['@href']),
    };
    if (isPresent(subTitle.href)) {
        return trimObject(subTitle);
    }
};
export const parsePeerLink = (value) => {
    if (!isObject(value)) {
        return;
    }
    const peerLink = {
        type: parseString(value['@type']),
        href: parseString(value['@href']),
    };
    if (isPresent(peerLink.href)) {
        return trimObject(peerLink);
    }
};
export const parseRights = (value) => {
    if (!isObject(value)) {
        return;
    }
    const rights = {
        status: parseString(value['@status']),
    };
    return trimObject(rights);
};
export const parseScene = (value) => {
    if (!isObject(value)) {
        return;
    }
    const scene = {
        title: parseSingularOf(value.scenetitle, parseTextString),
        description: parseSingularOf(value.scenedescription, parseTextString),
        startTime: parseSingularOf(value.scenestarttime, parseTextString),
        endTime: parseSingularOf(value.sceneendtime, parseTextString),
    };
    return trimObject(scene);
};
export const parseScenes = (value) => {
    return parseArrayOf(value?.['media:scene'], parseScene);
};
export const parseLocation = (value) => {
    // TODO: Extend parseLocation according to the specification of media:location:
    // https://www.rssboard.org/media-rss#media-peerlink after implementing GeoRSS GML support.
    // For cases where the location is simply a string within the <media:location> tag.
    if (isNonEmptyStringOrNumber(value) || isObject(value)) {
        return {
            description: parseString(retrieveText(value)),
        };
    }
    return undefined;
};
export const retrieveCommonElements = (value) => {
    if (!isObject(value)) {
        return;
    }
    const commonElements = {
        ratings: retrieveRatings(value),
        title: parseSingularOf(value['media:title'], parseTitleOrDescription),
        description: parseSingularOf(value['media:description'], parseTitleOrDescription),
        keywords: parseSingularOf(value['media:keywords'], (value) => parseCsvOf(retrieveText(value), parseString)),
        thumbnails: parseArrayOf(value['media:thumbnail'], parseThumbnail),
        categories: parseArrayOf(value['media:category'], parseCategory),
        hashes: parseArrayOf(value['media:hash'], parseHash),
        player: parseSingularOf(value['media:player'], parsePlayer),
        credits: parseArrayOf(value['media:credit'], parseCredit),
        copyright: parseSingularOf(value['media:copyright'], parseCopyright),
        texts: parseArrayOf(value['media:text'], parseText),
        restrictions: parseArrayOf(value['media:restriction'], parseRestriction),
        community: parseSingularOf(value['media:community'], parseCommunity),
        comments: parseSingularOf(value['media:comments'], parseComments),
        embed: parseSingularOf(value['media:embed'], parseEmbed),
        responses: parseSingularOf(value['media:responses'], parseResponses),
        backLinks: parseSingularOf(value['media:backlinks'], parseBackLinks),
        status: parseSingularOf(value['media:status'], parseStatus),
        prices: parseArrayOf(value['media:price'], parsePrice),
        licenses: parseArrayOf(value['media:license'], parseLicense),
        subTitles: parseArrayOf(value['media:subtitle'], parseSubTitle),
        peerLinks: parseArrayOf(value['media:peerlink'], parsePeerLink),
        locations: parseArrayOf(value['media:location'], parseLocation),
        rights: parseSingularOf(value['media:rights'], parseRights),
        scenes: parseSingularOf(value['media:scenes'], parseScenes),
    };
    return trimObject(commonElements);
};
export const parseContent = (value) => {
    if (!isObject(value)) {
        return;
    }
    const content = {
        url: parseString(value['@url']),
        fileSize: parseNumber(value['@filesize']),
        type: parseString(value['@type']),
        medium: parseString(value['@medium']),
        isDefault: parseBoolean(value['@isdefault']),
        expression: parseString(value['@expression']),
        bitrate: parseNumber(value['@bitrate']),
        framerate: parseNumber(value['@framerate']),
        samplingrate: parseNumber(value['@samplingrate']),
        channels: parseNumber(value['@channels']),
        duration: parseNumber(value['@duration']),
        height: parseNumber(value['@height']),
        width: parseNumber(value['@width']),
        lang: parseString(value['@lang']),
        ...retrieveCommonElements(value),
    };
    if (isPresent(content.url)) {
        return trimObject(content);
    }
};
export const parseGroup = (value) => {
    if (!isObject(value)) {
        return;
    }
    const group = {
        contents: parseArrayOf(value['media:content'], parseContent),
        ...retrieveCommonElements(value),
    };
    return trimObject(group);
};
export const retrieveItemOrFeed = (value) => {
    if (!isObject(value)) {
        return;
    }
    const itemOrFeed = {
        group: parseSingularOf(value['media:group'], parseGroup),
        contents: parseArrayOf(value['media:content'], parseContent),
        ...retrieveCommonElements(value),
    };
    return trimObject(itemOrFeed);
};
//# sourceMappingURL=utils.js.map