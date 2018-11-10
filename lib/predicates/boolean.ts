'use strict'

import { SubPredicates } from '../predicates';

export function validator(value): value is boolean
{
	return (typeof value === 'boolean')
}

export type PType = SubPredicates<any>;
