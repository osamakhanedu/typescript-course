import { DateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { Match } from './Match';


interface DataReader {
    read(): void;
    data: string[][];
}


export class MatchReader {

    public matches: Match[] = [];

    constructor(private reader: DataReader) {

    }

    load(): void {
        // read file and save it.
        this.reader.read();
        this.matches = this.reader.data.
            map((row: string[]): Match => {

                return [
                    DateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ]

            });
    }


}