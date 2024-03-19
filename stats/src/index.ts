import { log } from 'console';
import fs from 'fs';

const matches = fs.readFileSync('football.csv',{ encoding: 'utf-8'}).split('\n').map((line: string): string[]=> line.split(','));

// log(content)

let winCount = 0;


for (const match of matches) {

    if(match[1]=== "Man United" && match[5] === 'H'){
        winCount++;
    }
}

log('win count ' + winCount)