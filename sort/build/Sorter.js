"use strict";
/**
 * Interface define structue or wide range of shape of javascript object. it also specify the properties and behaviour of object it can have.
 */
// export interface Sortable {
//     length: number,
//     compare(leftIndex: number, rightIndex: number): boolean,
//     swap(leftIndex: number, rightIndex: number): void,
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
