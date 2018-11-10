'use strict'

import { SubPredicates } from '../predicates';
import { func } from '../symbols'

export const predicates = {
	positive: (value) => (value > 0),
	negative: (value) => (value < 0),
	nonNegative: (value) => (value >= 0),
	integer: (value) => (value === (value | 0)),

	[func]: {
		is: (fn) => fn,
		eq: (v: number) => (value) => (value === v),
		gt: (v: number) => (value) => (value > v),
		gte: (v: number) => (value) => (value >= v),
		lt: (v: number) => (value) => (value < v),
		lte: (v: number) => (value) => (value <= v),
	},
}

export function validator(value): value is number
{
	return typeof value === 'number'
}

export type PType = SubPredicates<typeof predicates>;
