import type { ParseFunction, Unreliable } from '../../common/types.js';
import type { Box, ItemOrFeed, Line, Point, Polygon } from './types.js';
export declare const parseLatLngPairs: (value: Unreliable, pairsCount?: {
    min?: number;
    max?: number;
}) => Array<Point> | undefined;
export declare const parsePoint: ParseFunction<Point>;
export declare const parseLine: ParseFunction<Line>;
export declare const parsePolygon: ParseFunction<Polygon>;
export declare const parseBox: ParseFunction<Box>;
export declare const retrieveItemOrFeed: ParseFunction<ItemOrFeed>;
