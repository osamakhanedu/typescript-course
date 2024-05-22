"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalyzer = void 0;
const MatchResult_1 = require("../MatchResult");
class WinAnalyzer {
    run(matches) {
        let winCount = 0;
        for (const match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                winCount++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                winCount++;
            }
        }
        return `Match united win ${winCount} games`;
    }
}
exports.WinAnalyzer = WinAnalyzer;
