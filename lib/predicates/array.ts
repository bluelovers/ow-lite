'use strict'

import { SubPredicates } from '../predicates';
import { func } from '../symbols'

export const predicates = {
	empty: (value) => (value.length === 0),
	nonEmpty: (value) => (value.length > 0),

	[func]: {
		is: (fn) => fn,
		length: (v: number) => (value) => (value.length === v),
		minLength: (v: number) => (value) => (value.length >= v),
		maxLength: (v: number) => (value) => (value.length <= v),
	},
}

export function validator<T extends E[], E extends unknown>(value: T): value is T & E[]
{
	return Array.isArray(value)
}

export type PType = SubPredicates<typeof predicates>;
