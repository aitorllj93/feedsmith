import type { Unreliable } from '../../common/types.js';
export declare const generateRfc822Date: (value: Unreliable) => string | undefined;
export declare const generateOutline: (value: Unreliable) => any;
export declare const generateHead: (value: Unreliable) => Partial<{
    title: string | undefined;
    dateCreated: string | undefined;
    dateModified: string | undefined;
    ownerName: string | undefined;
    ownerEmail: string | undefined;
    ownerId: string | undefined;
    docs: string | undefined;
    expansionState: string | undefined;
    vertScrollState: number | undefined;
    windowTop: number | undefined;
    windowLeft: number | undefined;
    windowBottom: number | undefined;
    windowRight: number | undefined;
}> | undefined;
export declare const generateBody: (value: Unreliable) => Partial<{
    outline: any[] | undefined;
}> | undefined;
export declare const generateOpml: (value: Unreliable) => {
    opml: Partial<{
        '@version': string;
        head: Partial<{
            title: string | undefined;
            dateCreated: string | undefined;
            dateModified: string | undefined;
            ownerName: string | undefined;
            ownerEmail: string | undefined;
            ownerId: string | undefined;
            docs: string | undefined;
            expansionState: string | undefined;
            vertScrollState: number | undefined;
            windowTop: number | undefined;
            windowLeft: number | undefined;
            windowBottom: number | undefined;
            windowRight: number | undefined;
        }> | undefined;
        body: Partial<{
            outline: any[] | undefined;
        }> | undefined;
    }>;
} | undefined;
