import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([4, -3, 11, 2]);
const charactersCollection = new CharactersCollection('cblora');

const sorter = new Sorter(numbersCollection);
const sorterString = new Sorter(charactersCollection);

sorter.sort();
sorterString.sort()
console.log(numbersCollection.data);
console.log(charactersCollection.data);
