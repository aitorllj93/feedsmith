import { isObject, isPresent, parseArrayOf, parseNumber, parseSingularOf, parseString, parseTextNumber, parseTextString, retrieveText, trimArray, trimObject, } from '../../../common/utils.js';
import { retrieveEntry as retrieveAtomEntry, retrieveFeed as retrieveAtomFeed, } from '../../../namespaces/atom/utils.js';
import { retrieveItem as retrieveContentItem } from '../../../namespaces/content/utils.js';
import { retrieveItemOrFeed as retrieveDcItemOrFeed } from '../../../namespaces/dc/utils.js';
import { retrieveItemOrFeed as retrieveGeoRssItemOrFeed } from '../../../namespaces/georss/utils.js';
import { retrieveFeed as retrieveItunesFeed, retrieveItem as retrieveItunesItem, } from '../../../namespaces/itunes/utils.js';
import { retrieveItemOrFeed as retrieveMediaItemOrFeed } from '../../../namespaces/media/utils.js';
import { retrieveFeed as retrievePodcastFeed, retrieveItem as retrievePodcastItem, } from '../../../namespaces/podcast/utils.js';
import { retrieveItem as retrieveSlashItem } from '../../../namespaces/slash/utils.js';
import { retrieveFeed as retrieveSyFeed } from '../../../namespaces/sy/utils.js';
import { retrieveItem as retrieveThrItem } from '../../../namespaces/thr/utils.js';
export const parseTextInput = (value) => {
    if (!isObject(value)) {
        return;
    }
    const textInput = {
        title: parseSingularOf(value.title, parseTextString),
        description: parseSingularOf(value.description, parseTextString),
        name: parseSingularOf(value.name, parseTextString),
        link: parseSingularOf(value.link, parseTextString),
    };
    if (isPresent(textInput.title) &&
        isPresent(textInput.description) &&
        isPresent(textInput.name) &&
        isPresent(textInput.link)) {
        return trimObject(textInput);
    }
};
export const parseCloud = (value) => {
    if (!isObject(value)) {
        return;
    }
    const cloud = {
        domain: parseString(value['@domain']),
        port: parseNumber(value['@port']),
        path: parseString(value['@path']),
        registerProcedure: parseString(value['@registerprocedure']),
        protocol: parseString(value['@protocol']),
    };
    if (isPresent(cloud.domain) &&
        isPresent(cloud.port) &&
        isPresent(cloud.path) &&
        isPresent(cloud.registerProcedure) &&
        isPresent(cloud.protocol)) {
        return trimObject(cloud);
    }
};
export const parseSkipHours = (value) => {
    return trimArray(value?.hour, parseTextNumber);
};
export const parseSkipDays = (value) => {
    return trimArray(value?.day, parseTextString);
};
export const parseEnclosure = (value) => {
    if (!isObject(value)) {
        return;
    }
    const enclosure = {
        url: parseString(value['@url']),
        length: parseNumber(value['@length']),
        type: parseString(value['@type']),
    };
    if (isPresent(enclosure.url) && isPresent(enclosure.length) && isPresent(enclosure.type)) {
        return trimObject(enclosure);
    }
};
export const parseSource = (value) => {
    const source = {
        title: parseString(retrieveText(value)),
        url: parseString(value?.['@url']),
    };
    if (isPresent(source.title)) {
        return trimObject(source);
    }
};
export const parseImage = (value) => {
    if (!isObject(value)) {
        return;
    }
    const image = {
        url: parseSingularOf(value.url, parseTextString),
        title: parseSingularOf(value.title, parseTextString),
        link: parseSingularOf(value.link, parseTextString),
        description: parseSingularOf(value.description, parseTextString),
        height: parseSingularOf(value.height, parseTextNumber),
        width: parseSingularOf(value.width, parseTextNumber),
    };
    if (isPresent(image.url) && isPresent(image.title) && isPresent(image.link)) {
        return trimObject(image);
    }
};
export const parseCategory = (value) => {
    const category = {
        name: parseString(retrieveText(value)),
        domain: parseString(value?.['@domain']),
    };
    if (isPresent(category.name)) {
        return trimObject(category);
    }
};
export const parseAuthor = (value) => {
    return parseSingularOf(value?.name ?? value, parseTextString);
};
export const parseItem = (value) => {
    if (!isObject(value)) {
        return;
    }
    const item = {
        title: parseSingularOf(value.title, parseTextString),
        link: parseSingularOf(value.link, parseTextString),
        description: parseSingularOf(value.description, parseTextString),
        authors: parseArrayOf(value.author, parseAuthor),
        categories: parseArrayOf(value.category, parseCategory),
        comments: parseSingularOf(value.comments, parseTextString),
        enclosure: parseSingularOf(value.enclosure, parseEnclosure),
        guid: parseSingularOf(value.guid, parseTextString),
        pubDate: parseSingularOf(value.pubdate, parseTextString),
        source: parseSingularOf(value.source, parseSource),
        content: retrieveContentItem(value),
        atom: retrieveAtomEntry(value),
        dc: retrieveDcItemOrFeed(value),
        slash: retrieveSlashItem(value),
        itunes: retrieveItunesItem(value),
        podcast: retrievePodcastItem(value),
        media: retrieveMediaItemOrFeed(value),
        georss: retrieveGeoRssItemOrFeed(value),
        thr: retrieveThrItem(value),
    };
    if (isPresent(item.title) || isPresent(item.description)) {
        return trimObject(item);
    }
};
export const parseFeed = (value) => {
    if (!isObject(value)) {
        return;
    }
    const feed = {
        title: parseSingularOf(value.title, parseTextString),
        link: parseSingularOf(value.link, parseTextString),
        description: parseSingularOf(value.description, parseTextString),
        language: parseSingularOf(value.language, parseTextString),
        copyright: parseSingularOf(value.copyright, parseTextString),
        managingEditor: parseSingularOf(value.managingeditor, parseTextString),
        webMaster: parseSingularOf(value.webmaster, parseTextString),
        pubDate: parseSingularOf(value.pubdate, parseTextString),
        lastBuildDate: parseSingularOf(value.lastbuilddate, parseTextString),
        categories: parseArrayOf(value.category, parseCategory),
        generator: parseSingularOf(value.generator, parseTextString),
        docs: parseSingularOf(value.docs, parseTextString),
        cloud: parseSingularOf(value.cloud, parseCloud),
        ttl: parseSingularOf(value.ttl, parseTextNumber),
        image: parseSingularOf(value.image, parseImage),
        rating: parseSingularOf(value.rating, parseTextString),
        textInput: parseSingularOf(value.textinput, parseTextInput),
        skipHours: parseSingularOf(value.skiphours, parseSkipHours),
        skipDays: parseSingularOf(value.skipdays, parseSkipDays),
        items: parseArrayOf(value.item, parseItem),
        atom: retrieveAtomFeed(value),
        dc: retrieveDcItemOrFeed(value),
        sy: retrieveSyFeed(value),
        itunes: retrieveItunesFeed(value),
        podcast: retrievePodcastFeed(value),
        media: retrieveMediaItemOrFeed(value),
        georss: retrieveGeoRssItemOrFeed(value),
    };
    // INFO: Spec also says about required "description" but this field is not always present
    // in feeds. We can still parse the feed without it. In addition, the "link" might be missing
    // as well when the atom:link rel="self" is present so checking "link" is skipped as well.
    if (isPresent(feed.title)) {
        return trimObject(feed);
    }
};
export const retrieveFeed = (value) => {
    return parseSingularOf(value?.rss?.channel, parseFeed);
};
//# sourceMappingURL=utils.js.map