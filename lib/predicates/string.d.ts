import { SubPredicates } from '../predicates';
export declare const predicates: {
    empty: (value: any) => boolean;
    nonEmpty: (value: any) => boolean;
    [func]: {
        is: <T extends Function>(fn: T) => T;
        eq: (v: any) => (value: any) => boolean;
        length: (v: number) => (value: any) => boolean;
        minLength: (v: number) => (value: any) => boolean;
        maxLength: (v: number) => (value: any) => boolean;
        matches: (v: any) => (value: any) => any;
        startsWith: (v: any) => (value: string) => boolean;
        endsWith: (v: any) => (value: string) => boolean;
    };
};
export declare function validator(value: any): value is string;
export declare type PType = SubPredicates<typeof predicates>;
