'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
exports.predicates = {
    empty: (value) => (value === ''),
    nonEmpty: (value) => (value !== ''),
    [symbols_1.func]: {
        is: (fn) => fn,
        eq: (v) => (value) => (value === v),
        length: (v) => (value) => (value.length === v),
        minLength: (v) => (value) => (value.length >= v),
        maxLength: (v) => (value) => (value.length <= v),
        matches: (v) => (value) => v.test(value),
        startsWith: (v) => (value) => value.startsWith(v),
        endsWith: (v) => (value) => value.endsWith(v),
    },
};
function validator(value) {
    return typeof value === 'string';
}
exports.validator = validator;
