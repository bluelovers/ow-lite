'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
exports.predicates = {
    plain: (value) => {
        if (!validator(value))
            return false;
        const proto = Object.getPrototypeOf(value);
        return proto === null || proto === Object.getPrototypeOf({});
    },
    empty: (value) => Object.keys(value).length === 0,
    nonEmpty: (value) => Object.keys(value).length > 0,
    [symbols_1.func]: {
        is: (fn) => fn,
        instanceOf: (v) => (value) => (value instanceof v),
    },
};
function validator(value) {
    return typeof value === 'object';
}
exports.validator = validator;
