export const detect = (value) => {
    return typeof value === 'string' && /<rdf:rdf[\s>]/i.test(value);
};
//# sourceMappingURL=index.js.map