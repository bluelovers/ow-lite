'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../symbols");
const utils_1 = require("../utils");
exports.predicates = {
    [symbols_1.func]: {
        is: (fn) => fn,
        before: (v) => (value) => (value.getTime() < v.getTime()),
        after: (v) => (value) => (value.getTime() > v.getTime()),
    },
};
function validator(value) {
    return (utils_1.getObjectType(value) === 'Date');
}
exports.validator = validator;
