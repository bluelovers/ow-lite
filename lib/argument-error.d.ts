declare class ArgumentError extends Error {
    constructor(message: any, context: Function);
    readonly name: string;
    readonly [Symbol.toStringTag]: string;
}
export = ArgumentError;
