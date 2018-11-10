'use strict'

import { SubPredicates } from '../predicates';

export function validator<T>(value: T): value is T & Function
{
	return (typeof value === 'function')
}

export type PType = SubPredicates<any>;
