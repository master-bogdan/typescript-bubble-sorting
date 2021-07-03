interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void; 
}

export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {

      for (let k = 0; k < length - i - 1; k++) {
        if (this.collection.compare(k, k + 1)) {
          this.collection.swap(k, k + 1);
        }
      }
    }
  }
}