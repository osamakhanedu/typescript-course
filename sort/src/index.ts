
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollections';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([-5, 3, 10, 6]);
numbers.sort();
// @ts-ignore
console.log(numbers.data);

const characters = new CharacterCollection('waxopn');

characters.sort();
// @ts-ignore
console.log(characters);

const list = new LinkedList();

list.add(3);
list.add(2);
list.add(6);
list.add(4);

list.sort();

list.print();
