import type { ParseFunction } from '../../common/types.js';
import type { Category, Feed, Item, Owner } from './types.js';
export declare const parseCategory: ParseFunction<Category>;
export declare const parseOwner: ParseFunction<Owner>;
export declare const parseExplicit: ParseFunction<boolean>;
export declare const parseDuration: ParseFunction<number>;
export declare const parseImage: ParseFunction<string>;
export declare const retrieveItem: ParseFunction<Item>;
export declare const retrieveFeed: ParseFunction<Feed>;
