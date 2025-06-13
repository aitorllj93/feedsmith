import { parseEntry as parseAtomEntry, parseFeed as parseAtomFeed, } from '../../feeds/atom/parse/utils.js';
export const retrieveEntry = (value) => {
    return (parseAtomEntry(value, { prefix: 'atom:', partial: true }) ||
        parseAtomEntry(value, { prefix: 'a10:', partial: true }));
};
export const retrieveFeed = (value) => {
    return (parseAtomFeed(value, { prefix: 'atom:', partial: true }) ||
        parseAtomFeed(value, { prefix: 'a10:', partial: true }));
};
//# sourceMappingURL=utils.js.map