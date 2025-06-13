import { isNonEmptyStringOrNumber, isObject, parseNumber, parseSingularOf, parseString, parseTextNumber, parseTextString, retrieveText, trimArray, trimObject, } from '../../common/utils.js';
export const parseHitParade = (value) => {
    if (!isNonEmptyStringOrNumber(value)) {
        return;
    }
    const hitParade = parseString(value)?.split(',');
    if (hitParade) {
        return trimArray(hitParade, parseNumber);
    }
};
export const retrieveItem = (value) => {
    if (!isObject(value)) {
        return;
    }
    const item = trimObject({
        section: parseSingularOf(value['slash:section'], parseTextString),
        department: parseSingularOf(value['slash:department'], parseTextString),
        comments: parseSingularOf(value['slash:comments'], parseTextNumber),
        hit_parade: parseSingularOf(value['slash:hit_parade'], (value) => parseHitParade(retrieveText(value))),
    });
    return item;
};
//# sourceMappingURL=utils.js.map