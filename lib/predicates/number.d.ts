import { SubPredicates } from '../predicates';
export declare const predicates: {
    positive: (value: any) => boolean;
    negative: (value: any) => boolean;
    nonNegative: (value: any) => boolean;
    integer: (value: any) => boolean;
    [func]: {
        is: (fn: any) => any;
        eq: (v: number) => (value: any) => boolean;
        gt: (v: number) => (value: any) => boolean;
        gte: (v: number) => (value: any) => boolean;
        lt: (v: number) => (value: any) => boolean;
        lte: (v: number) => (value: any) => boolean;
    };
};
export declare function validator(value: any): value is number;
export declare type PType = SubPredicates<typeof predicates>;
