export const detect = (value) => {
    return typeof value === 'string' && /<rss[\s>]/i.test(value);
};
//# sourceMappingURL=index.js.map