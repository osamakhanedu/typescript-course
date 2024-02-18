"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([-5, 3, 10, 6]);
const sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(sorter.collection);
