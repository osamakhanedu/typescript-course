import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollections';

const numbers = new NumbersCollection([-5, 3, 10, 6]);
const characters = new CharacterCollection('waxopn');

const sorter = new Sorter(numbers);
sorter.sort();

const sorter1 = new Sorter(characters);
sorter1.sort();

console.log(sorter.collection);

console.log(sorter1.collection);
