import { SubPredicates } from '../predicates';
export declare function validator<T>(value: T): value is T & Function;
export declare type PType = SubPredicates<any>;
