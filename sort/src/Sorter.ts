
/**
 * Interface define structue or wide range of shape of javascript object. it also specify the properties and behaviour of object it can have.
 */
// export interface Sortable {
//     length: number,
//     compare(leftIndex: number, rightIndex: number): boolean,
//     swap(leftIndex: number, rightIndex: number): void,
// };


export abstract class Sorter {
    abstract get length(): number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {

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
