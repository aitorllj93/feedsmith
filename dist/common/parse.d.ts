import type { Feed as AtomFeed } from '../feeds/atom/parse/types.js';
import type { Feed as JsonFeed } from '../feeds/json/parse/types.js';
import type { Feed as RdfFeed } from '../feeds/rdf/parse/types.js';
import type { Feed as RssFeed } from '../feeds/rss/parse/types.js';
export type Feed = {
    type: 'json';
    feed: JsonFeed;
} | {
    type: 'rss';
    feed: RssFeed;
} | {
    type: 'atom';
    feed: AtomFeed;
} | {
    type: 'rdf';
    feed: RdfFeed;
};
export declare const parse: (value: unknown) => Feed;
