import { isObject, parseSingularOf, parseTextNumber, parseTextString, trimObject, } from '../../common/utils.js';
export const retrieveFeed = (value) => {
    if (!isObject(value)) {
        return;
    }
    const feed = trimObject({
        updatePeriod: parseSingularOf(value['sy:updateperiod'], parseTextString),
        updateFrequency: parseSingularOf(value['sy:updatefrequency'], parseTextNumber),
        updateBase: parseSingularOf(value['sy:updatebase'], parseTextString),
    });
    return feed;
};
//# sourceMappingURL=utils.js.map