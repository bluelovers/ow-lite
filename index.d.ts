import array = require('./lib/predicates/array');
import boolean = require('./lib/predicates/boolean');
import date = require('./lib/predicates/date');
import func = require('./lib/predicates/function');
import number = require('./lib/predicates/number');
import object = require('./lib/predicates/object');
import string = require('./lib/predicates/string');
import { Predicates } from './lib/predicates';
declare const typePredicates: {
    array: typeof array;
    boolean: typeof boolean;
    date: typeof date;
    function: typeof func;
    number: typeof number;
    object: typeof object;
    string: typeof string;
};
declare type typePredicates = typeof typePredicates;
declare type IOWLitePredicates<T = typePredicates> = {
    [p in keyof T]: Predicates<T[p]>;
};
declare type IOWLite = {
    (value: any, predicates: IOWLitePredicates<typePredicates> | unknown, label?: string): void;
} & IOWLitePredicates;
declare const _ow: IOWLite;
export default _ow;
export = _ow;
