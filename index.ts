'use strict'

import symbols = require('./lib/symbols')

import array = require('./lib/predicates/array')
import boolean = require('./lib/predicates/boolean')
import date = require('./lib/predicates/date')
import func = require('./lib/predicates/function')
import number = require('./lib/predicates/number')
import object = require('./lib/predicates/object')
import string = require('./lib/predicates/string')
import ArgumentError = require('./lib/argument-error');
import { SubPredicates, Predicates } from './lib/predicates';

const typePredicates = {
	array,
	boolean,
	date,
	function: func,
	number,
	object,
	string,
};

type typePredicates = typeof typePredicates

type IOWLitePredicates<T = typePredicates> = {
	[p in keyof T]: Predicates<T[p]>
}

type IOWLite = {
	(value, predicates: IOWLitePredicates<typePredicates> | unknown, label?: string): void;
} & IOWLitePredicates

const createOw = ({
	validators = [],
	predicates = typePredicates,
	type = null
} = { }) => {
	const ow: IOWLite = new Proxy(function () { } as any as IOWLite, {
		get: (obj, key: string | symbol) =>
		{
			if (key === 'default')
			{
				return ow
			}
			else if (key === symbols.validate)
			{
				return (value, label = 'argument') =>
				{
					if (!type)
					{
						return new SyntaxError('missing required type specifier')
					}

					for (let i = 0; i < validators.length; ++i)
					{
						const validator = validators[i]
						const result = validator.fn(value)

						if (!result)
						{
							if (i === 0)
							{
								throw new ArgumentError(`Expected ${label} \`${value}\` to be of type \`${type}\`, but received type \`${typeof value}\``, ow)
							}
							else
							{
								throw new ArgumentError(`Expected ${type} \`${label}\` \`${value}\` failed predicate \`${validator.key}\``, ow)
							}
						}
					}
				}
			}
			else if (0 && !predicates && key in obj)
			{
				console.log(obj, key);
				return obj[key]
			}

			if (!predicates)
			{
				// @ts-ignore
				throw new Error(`Unknown \`${type}\` predicate \`${key}\``)
			}

			const predicate = predicates[key]

			if (predicate)
			{
				if (typeof predicate === 'function')
				{
					validators.push({
						key,
						fn: predicate,
					})

					return ow
				}
				else
				{
					return createOw({
						type: key,
						validators: [
							{
								key,
								fn: predicate.validator,
							},
						],
						predicates: predicate.predicates || null,
					})
				}
			}
			else
			{
				const fn = predicates[symbols.func] && predicates[symbols.func][key]

				if (fn)
				{
					return new Proxy(function () { }, {
						get: () =>
						{
							// @ts-ignore
							throw new Error(`invalid use of functional predicate "${key}"`)
						},

						apply: (obj, thisArg, args) =>
						{
							validators.push({
								key,
								fn: fn(...args),
							})

							return ow
						},
					})
				}
				else
				{
					if (key === 'default' || key === '__esModule')
					{
						return ow
					}

					return ow
					// throw new Error(`unrecognized predicate "${key}"`)
				}
			}
		},

		apply: (obj, thisArg, args) =>
		{
			if (args.length !== 2 && args.length !== 3)
			{
				throw new SyntaxError('invalid number of arguments to "ow"')
			}
			else
			{
				args[1][symbols.validate](args[0], args[2])
			}
		},
	});

	return ow
};

const _ow = createOw();

export default _ow
// @ts-ignore
export = _ow

