import { isObject, parseSingularOf, parseTextString, trimObject } from '../../common/utils.js';
export const retrieveItem = (value) => {
    if (!isObject(value)) {
        return;
    }
    const item = trimObject({
        encoded: parseSingularOf(value['content:encoded'], parseTextString),
    });
    return item;
};
//# sourceMappingURL=utils.js.map