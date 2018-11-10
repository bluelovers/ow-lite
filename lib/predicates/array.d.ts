import { SubPredicates } from '../predicates';
export declare const predicates: {
    empty: (value: any) => boolean;
    nonEmpty: (value: any) => boolean;
    [func]: {
        is: (fn: any) => any;
        length: (v: number) => (value: any) => boolean;
        minLength: (v: number) => (value: any) => boolean;
        maxLength: (v: number) => (value: any) => boolean;
    };
};
export declare function validator<T extends E[], E extends unknown>(value: T): value is T & E[];
export declare type PType = SubPredicates<typeof predicates>;
