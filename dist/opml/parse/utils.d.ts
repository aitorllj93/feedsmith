import type { ParseFunction } from '../../common/types.js';
import type { Body, Head, Opml, Outline } from './types.js';
export declare const parseOutline: ParseFunction<Outline>;
export declare const parsePrompts: ParseFunction<Head['systemPrompts']>;
export declare const parseHead: ParseFunction<Head>;
export declare const parseBody: ParseFunction<Body>;
export declare const parseOpml: ParseFunction<Opml>;
