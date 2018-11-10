/**
 * Created by user on 2018/11/10/010.
 */
import { func } from './symbols';
export declare type DataPredicates = {
    [k: string]: Function;
    [func]?: {
        [k: string]: Function;
    };
};
export declare type SubPredicatesFunc<T extends DataPredicates> = {
    [p in keyof T[typeof func]]: (...argv: any[]) => SubPredicatesFunc<T>;
} & {
    [p in keyof T[typeof func]]: (...argv: any[]) => SubPredicatesFunc<T>;
};
export declare type SubPredicates<T extends DataPredicates> = {
    [p in keyof T]: SubPredicates<T>;
} & {
    [p in keyof T[typeof func]]: (...argv: any[]) => SubPredicatesFunc<T>;
};
export declare type Predicates<T extends any> = SubPredicates<T["predicates"]>;
