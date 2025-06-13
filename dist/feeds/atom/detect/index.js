export const detect = (value) => {
    return typeof value === 'string' && /<(?:atom:)?feed[\s>]/i.test(value);
};
//# sourceMappingURL=index.js.map