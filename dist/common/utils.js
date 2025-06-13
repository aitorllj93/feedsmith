import { decodeHTML, decodeXML } from 'entities';
export const isPresent = (value) => {
    return value != null;
};
export const isObject = (value) => {
    return (isPresent(value) &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        Object.getPrototypeOf(value) === Object.prototype);
};
export const isNonEmptyString = (value) => {
    return typeof value === 'string' && value !== '' && value.trim() !== '';
};
export const isNonEmptyStringOrNumber = (value) => {
    return isNonEmptyString(value) || typeof value === 'number';
};
export const retrieveText = (value) => {
    return value?.['#text'] ?? value;
};
export const trimObject = (object) => {
    const result = {};
    const keys = Object.keys(object);
    let hasProperties = false;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = object[key];
        if (isPresent(value)) {
            result[key] = value;
            hasProperties = true;
        }
    }
    if (hasProperties) {
        return result;
    }
};
export const trimArray = (value, parse) => {
    if (!Array.isArray(value)) {
        return;
    }
    const result = [];
    for (let i = 0; i < value.length; i++) {
        const item = parse ? parse(value[i]) : value[i];
        if (isPresent(item)) {
            result.push(item);
        }
    }
    if (result.length > 0) {
        return result;
    }
};
export const stripCdata = (text) => {
    if (typeof text !== 'string') {
        return text;
    }
    if (text.indexOf('[CDATA[') === -1) {
        return text;
    }
    // For simple cases with only one CDATA section (common case).
    const startTag = '<![CDATA[';
    const endTag = ']]>';
    const startPos = text.indexOf(startTag);
    // If we have just one simple CDATA section, handle it without regex.
    if (startPos !== -1) {
        const endPos = text.indexOf(endTag, startPos + startTag.length);
        if (endPos !== -1 && text.indexOf(startTag, startPos + startTag.length) === -1) {
            // Single CDATA section case - avoid regex.
            return (text.substring(0, startPos) +
                text.substring(startPos + startTag.length, endPos) +
                text.substring(endPos + endTag.length));
        }
    }
    // Fall back to regex for complex cases with multiple CDATA sections.
    return text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
};
export const hasEntities = (text) => {
    const ampIndex = text.indexOf('&');
    return ampIndex !== -1 && text.indexOf(';', ampIndex) !== -1;
};
export const parseString = (value) => {
    if (typeof value === 'string') {
        return hasEntities(value)
            ? decodeHTML(decodeXML(stripCdata(value.trim())))
            : stripCdata(value.trim());
    }
    if (typeof value === 'number') {
        return value.toString();
    }
};
export const parseNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string' && value !== '') {
        const numeric = +value;
        return Number.isNaN(numeric) ? undefined : numeric;
    }
};
export const parseBoolean = (value) => {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        const lowercased = value.toLowerCase();
        if (lowercased === 'true')
            return true;
        if (lowercased === 'false')
            return false;
    }
};
export const parseYesNoBoolean = (value) => {
    const boolean = parseBoolean(value);
    if (boolean !== undefined) {
        return boolean;
    }
    if (typeof value === 'string') {
        return value.toLowerCase() === 'yes';
    }
};
export const parseArray = (value) => {
    if (Array.isArray(value)) {
        return value;
    }
    if (!isObject(value)) {
        return;
    }
    if (value.length) {
        return Array.from(value);
    }
    const keys = Object.keys(value);
    if (keys.length === 0) {
        return;
    }
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const n = Number(key);
        if (!Number.isInteger(n) || n !== i) {
            return;
        }
    }
    return Object.values(value);
};
export const parseArrayOf = (value, parse) => {
    const array = parseArray(value);
    if (array) {
        return trimArray(array, parse);
    }
    const parsed = parse(value);
    if (parsed) {
        return [parsed];
    }
};
export const parseSingular = (value) => {
    return Array.isArray(value) ? value[0] : value;
};
export const parseSingularOf = (value, parse) => {
    return parse(parseSingular(value));
};
export const parseCsvOf = (value, parse) => {
    if (!isNonEmptyStringOrNumber(value)) {
        return;
    }
    const items = parseString(value)?.split(',');
    if (items) {
        return trimArray(items, (item) => parse(item) || undefined);
    }
};
export const createNamespaceGetter = (value, prefix) => {
    return prefix ? (key) => value[prefix + key] : (key) => value[key];
};
export const createCaseInsensitiveGetter = (value) => {
    const keyMap = new Map();
    for (const key in value) {
        if (Object.hasOwn(value, key)) {
            keyMap.set(key.toLowerCase(), key);
        }
    }
    return (requestedKey) => {
        const originalKey = keyMap.get(requestedKey.toLowerCase());
        return originalKey ? value[originalKey] : undefined;
    };
};
// TODO: Write tests.
export const parseTextString = (value) => {
    return parseString(retrieveText(value));
};
// TODO: Write tests.
export const parseTextNumber = (value) => {
    return parseNumber(retrieveText(value));
};
//# sourceMappingURL=utils.js.map