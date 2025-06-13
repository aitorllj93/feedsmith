import type { ParseFunction } from '../../../common/types.js';
import type { Attachment, Author, Feed, Hub, Item } from './types.js';
export declare const parseAuthor: ParseFunction<Author>;
export declare const retrieveAuthors: ParseFunction<Array<Author>>;
export declare const parseHub: ParseFunction<Hub>;
export declare const parseAttachment: ParseFunction<Attachment>;
export declare const parseItem: ParseFunction<Item>;
export declare const parseFeed: ParseFunction<Feed>;
