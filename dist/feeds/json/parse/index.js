import { locales } from '../../../common/config.js';
import { detectJsonFeed } from '../../../index.js';
import { parseFeed } from './utils.js';
export const parse = (value) => {
    if (!detectJsonFeed(value)) {
        throw new Error(locales.invalid);
    }
    const parsed = parseFeed(value);
    if (!parsed) {
        throw new Error(locales.invalid);
    }
    return parsed;
};
//# sourceMappingURL=index.js.map