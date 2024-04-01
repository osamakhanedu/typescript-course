import fs from 'fs';
import { DateStringToDate } from './utils';

export class CsvFileReader {

    public data: string[][];

    constructor(public fileName: string) {

        this.data = []
    }


    read(): void {

        this.data = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(',')).map((row: string[]): any => {

            return [
                DateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                parseInt(row[5]),
            ]

        });


    }
}