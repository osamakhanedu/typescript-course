import { log } from 'console';
import fs from 'fs';

const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));


// enum - enumeration 
// set of very closely related value ( constant )
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let winCount = 0;


for (const match of matches) {

    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        winCount++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        winCount++;
    }
}

log('win count ' + winCount)