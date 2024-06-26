import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../MatchResult";
import { DateStringToDate } from '../utils';
import { Match } from '../Match';


export class MatchReader extends CsvFileReader<Match> {
    mapRow(row: string[]): Match {

        return [
            DateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}