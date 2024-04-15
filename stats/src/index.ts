import { log } from 'console';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
// import fs from 'fs';

// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));


const fileReader = new CsvFileReader("football.csv");
fileReader.read();



let winCount = 0;


for (const match of fileReader.data) {

    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        winCount++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        winCount++;
    }
}

log('win count ' + winCount)