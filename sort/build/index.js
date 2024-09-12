"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollections_1 = require("./CharacterCollections");
const LinkedList_1 = require("./LinkedList");
const numbers = new NumbersCollection_1.NumbersCollection([-5, 3, 10, 6]);
numbers.sort();
// @ts-ignore
console.log(numbers.data);
const characters = new CharacterCollections_1.CharacterCollection('waxopn');
characters.sort();
// @ts-ignore
console.log(characters);
const list = new LinkedList_1.LinkedList();
list.add(3);
list.add(2);
list.add(6);
list.add(4);
list.sort();
list.print();
