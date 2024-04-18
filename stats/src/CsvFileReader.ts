import fs from 'fs';
import { MatchResult } from './MatchResult';



export abstract class CsvFileReader<Type> {

    public data: Type[];

    constructor(public fileName: string) {

        this.data = []
    }

    abstract mapRow(row: string[]): Type;

    read(): void {

        this.data = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(',')).map(this.mapRow);


    }


}