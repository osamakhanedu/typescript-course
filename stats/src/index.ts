import { log } from 'console';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFilerReader';
// import fs from 'fs';

// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));


const csvFileReader = new CsvFileReader("football.csv");


const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let winCount = 0;


for (const match of matchReader.matches) {

    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        winCount++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        winCount++;
    }
}

log('win count ' + winCount)