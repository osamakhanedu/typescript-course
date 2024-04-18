"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// import fs from 'fs';
// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));
const fileReader = new MatchReader_1.MatchReader("football.csv");
fileReader.read();
let winCount = 0;
for (const match of fileReader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        winCount++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        winCount++;
    }
}
(0, console_1.log)('win count ' + winCount);
