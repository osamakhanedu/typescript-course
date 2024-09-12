import { log } from 'console';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFilerReader';
import { WinAnalyzer } from './analyzer/WinAnalyzer';
import { ConsoleTarget } from './output/ConsoleTarget';
import { Summary } from './Summary';
// import fs from 'fs';

// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((line: string): string[] => line.split(','));


const csvFileReader = new CsvFileReader("football.csv");


const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const matchAnalyzer = new WinAnalyzer();
const printSummary = new ConsoleTarget();
const matchSummary = new Summary(matchAnalyzer, printSummary);


const matchResultSummary = matchSummary.analyzer.run(matchReader.matches);

matchSummary.outputTarget.print(matchResultSummary);