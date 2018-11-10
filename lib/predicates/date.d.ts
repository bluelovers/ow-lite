import { SubPredicates } from '../predicates';
export declare const predicates: {
    [func]: {
        is: (fn: any) => any;
        before: (v: Date) => (value: any) => boolean;
        after: (v: Date) => (value: any) => boolean;
    };
};
export declare function validator<T>(value: T): value is T & Date;
export declare type PType = SubPredicates<typeof predicates>;
