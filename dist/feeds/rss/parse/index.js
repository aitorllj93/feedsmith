import { locales } from '../../../common/config.js';
import { detectRssFeed } from '../../../index.js';
import { parser } from './config.js';
import { retrieveFeed } from './utils.js';
export const parse = (value) => {
    if (!detectRssFeed(value)) {
        throw new Error(locales.invalid);
    }
    const object = parser.parse(value);
    const parsed = retrieveFeed(object);
    if (!parsed) {
        throw new Error(locales.invalid);
    }
    return parsed;
};
//# sourceMappingURL=index.js.map