import { isObject, isPresent, parseArrayOf, parseNumber, parseSingularOf, parseString, parseTextNumber, trimObject, } from '../../common/utils.js';
export const parseInReplyTo = (value) => {
    if (!isObject(value)) {
        return;
    }
    const inReplyTo = {
        ref: parseString(value['@ref']),
        href: parseString(value['@href']),
        type: parseString(value['@type']),
        source: parseString(value['@source']),
    };
    if (isPresent(inReplyTo.ref)) {
        return trimObject(inReplyTo);
    }
};
export const retrieveLink = (value) => {
    if (!isObject(value)) {
        return;
    }
    const link = {
        count: parseNumber(value['@thr:count']),
        updated: parseString(value['@thr:updated']),
    };
    return trimObject(link);
};
export const retrieveItem = (value) => {
    if (!isObject(value)) {
        return;
    }
    const item = {
        total: parseSingularOf(value['thr:total'], parseTextNumber),
        inReplyTos: parseArrayOf(value['thr:in-reply-to'], parseInReplyTo),
    };
    return trimObject(item);
};
//# sourceMappingURL=utils.js.map