'use strict'

export function getObjectType(value): string
{
	return toString.call(value).slice(8, -1)
}
