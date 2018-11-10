/**
 * Created by user on 2018/11/10/010.
 */

import { func } from './symbols';

export type DataPredicates = {
	[k: string]: Function
	[func]?: {
		[k: string]: Function
	}
}

export type SubPredicatesFunc<T extends DataPredicates> = {
	[p in keyof T[typeof func]]: (...argv) => SubPredicatesFunc<T>;
} & {
	[p in keyof T[typeof func]]: (...argv) => SubPredicatesFunc<T>;
}

export type SubPredicates<T extends DataPredicates> = {
	[p in keyof T]: SubPredicates<T>;
} & {
	[p in keyof T[typeof func]]: (...argv) => SubPredicatesFunc<T>;
}

export type Predicates<T extends any> = SubPredicates<T["predicates"]>
