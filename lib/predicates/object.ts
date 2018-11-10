'use strict'

import { SubPredicates } from '../predicates';
import { func } from '../symbols'

export const predicates = {
	plain: (value) =>
	{
		if (!validator(value)) return false

		const proto = Object.getPrototypeOf(value)
		return proto === null || proto === Object.getPrototypeOf({})
	},
	empty: (value) => Object.keys(value).length === 0,
	nonEmpty: (value) => Object.keys(value).length > 0,

	[func]: {
		is: (fn) => fn,
		instanceOf: <T extends Function>(v: T) => (value): value is T => (value instanceof v),
	},
}

export function validator<T>(value: T): value is T & object
{
	return typeof value === 'object'
}

export type PType = SubPredicates<typeof predicates>;
