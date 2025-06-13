export const parserConfig = {
    trimValues: false,
    processEntities: false,
    htmlEntities: false,
    parseTagValue: false,
    parseAttributeValue: false,
    alwaysCreateTextNode: false,
    ignoreAttributes: false,
    ignorePiTags: true,
    ignoreDeclaration: true,
    attributeNamePrefix: '@',
    transformTagName: (name) => name.toLowerCase(),
    transformAttributeName: (name) => name.toLowerCase(),
};
export const locales = {
    unrecognized: 'Unrecognized feed format',
    invalid: 'Invalid feed format',
};
//# sourceMappingURL=config.js.map