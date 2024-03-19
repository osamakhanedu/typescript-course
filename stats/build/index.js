"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line) => line.split(','));
// log(content)
let winCount = 0;
for (const match of matches) {
    if (match[1] === "Man United" && match[5] === 'H') {
        winCount++;
    }
}
(0, console_1.log)('win count ' + winCount);
