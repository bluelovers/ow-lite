import { SubPredicates } from '../predicates';
export declare const predicates: {
    plain: (value: any) => boolean;
    empty: (value: any) => boolean;
    nonEmpty: (value: any) => boolean;
    [func]: {
        is: (fn: any) => any;
        instanceOf: <T extends Function>(v: T) => (value: any) => value is T;
    };
};
export declare function validator<T>(value: T): value is T & object;
export declare type PType = SubPredicates<typeof predicates>;
