// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void; 
// }

export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {

      for (let k = 0; k < length - i - 1; k++) {
        if (this.compare(k, k + 1)) {
          this.swap(k, k + 1);
        }
      }
    }
  }
}