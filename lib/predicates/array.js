'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
exports.predicates = {
    empty: (value) => (value.length === 0),
    nonEmpty: (value) => (value.length > 0),
    [symbols_1.func]: {
        is: (fn) => fn,
        length: (v) => (value) => (value.length === v),
        minLength: (v) => (value) => (value.length >= v),
        maxLength: (v) => (value) => (value.length <= v),
    },
};
function validator(value) {
    return Array.isArray(value);
}
exports.validator = validator;
