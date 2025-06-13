export type Unreliable = any;
export type ParseFunction<R, O = never> = (value: Unreliable, options?: O) => R | undefined;
