"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateStringToDate = void 0;
const DateStringToDate = (date) => {
    const dateParts = date.split("/").map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.DateStringToDate = DateStringToDate;
