'use strict'

import { SubPredicates } from '../predicates';
import { func } from '../symbols'

export const predicates = {
	empty: (value) => (value === ''),
	nonEmpty: (value) => (value !== ''),

	[func]: {
		is: <T extends Function>(fn: T) => fn,
		eq: (v) => (value) => (value === v),
		length: (v: number) => (value) => (value.length === v),
		minLength: (v: number) => (value) => (value.length >= v),
		maxLength: (v: number) => (value) => (value.length <= v),
		matches: (v) => (value) => v.test(value),
		startsWith: (v) => (value: string) => value.startsWith(v),
		endsWith: (v) => (value: string) => value.endsWith(v),
	},
}

export function validator(value): value is string
{
	return typeof value === 'string'
}

export type PType = SubPredicates<typeof predicates>
