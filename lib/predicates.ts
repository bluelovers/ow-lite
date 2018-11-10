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
export type SubPredicates<T extends DataPredicates> = {
	[p in keyof T]: {
		[p in keyof T[typeof func]]: T[typeof func][p];
	};
} & {
	[p2 in keyof T]: SubPredicates<T>;
} & {
	[p in keyof T[typeof func]]: T[typeof func][p];
}

export type Predicates<T extends any> = SubPredicates<T["predicates"]>
