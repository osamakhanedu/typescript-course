import fs from 'fs';

export class CsvFileReader {

    public data: string[][]

    constructor(public fileName: string) {

        this.data = []
    }


    read(): void {

        this.data = fs.readFileSync(this.fileName, { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));
    }
}