import type { ParseFunction } from '../../common/types.js';
import type { InReplyTo, Item, Link } from './types.js';
export declare const parseInReplyTo: ParseFunction<InReplyTo>;
export declare const retrieveLink: ParseFunction<Link>;
export declare const retrieveItem: ParseFunction<Item>;
