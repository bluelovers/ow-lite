'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
exports.predicates = {
    positive: (value) => (value > 0),
    negative: (value) => (value < 0),
    nonNegative: (value) => (value >= 0),
    integer: (value) => (value === (value | 0)),
    [symbols_1.func]: {
        is: (fn) => fn,
        eq: (v) => (value) => (value === v),
        gt: (v) => (value) => (value > v),
        gte: (v) => (value) => (value >= v),
        lt: (v) => (value) => (value < v),
        lte: (v) => (value) => (value <= v),
    },
};
function validator(value) {
    return typeof value === 'number';
}
exports.validator = validator;
