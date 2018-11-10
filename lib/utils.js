'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectType(value) {
    return toString.call(value).slice(8, -1);
}
exports.getObjectType = getObjectType;
