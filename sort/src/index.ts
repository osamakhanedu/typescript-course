import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([-5, 3, 10, 6])

const sorter = new Sorter(numbers);
sorter.sort();

console.log(sorter.collection);
