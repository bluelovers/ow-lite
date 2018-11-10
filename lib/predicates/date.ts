'use strict'

import { SubPredicates } from '../predicates';
import { func } from '../symbols'
import { getObjectType } from '../utils'

export const predicates = {
	[func]: {
		is: (fn) => fn,
		before: (v: Date) => (value) => (value.getTime() < v.getTime()),
		after: (v: Date) => (value) => (value.getTime() > v.getTime()),
	},
}

export function validator<T>(value: T): value is T & Date
{
	return (getObjectType(value) === 'Date')
}

export type PType = SubPredicates<typeof predicates>;
