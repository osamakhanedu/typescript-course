"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const CsvFileReader_1 = require("./CsvFileReader");
// import fs from 'fs';
// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));
const fileReader = new CsvFileReader_1.CsvFileReader("football.csv");
fileReader.read();
// enum - enumeration 
// set of very closely related value ( constant )
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
let winCount = 0;
for (const match of fileReader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        winCount++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        winCount++;
    }
}
(0, console_1.log)('win count ' + winCount);
