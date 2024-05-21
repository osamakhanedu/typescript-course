import { Match } from "./Match";


export interface Analyzer {
    run(match: Match[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {

    }
}