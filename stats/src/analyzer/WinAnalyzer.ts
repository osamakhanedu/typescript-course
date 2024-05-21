import { Match } from "../Match";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";


export class WinAnalyzer implements Analyzer {

    run(matches: Match[]): string {

        let winCount = 0;

        for (const match of matches) {

            if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
                winCount++;
            } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                winCount++;

            }
        }


        return `Match united win ${winCount} games`


    }
}