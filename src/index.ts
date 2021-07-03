import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([4, -3, 11, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZxYmba');
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-11);
linkedList.add(-120);
linkedList.add(240);
linkedList.add(5);
linkedList.add(401);
linkedList.sort();
linkedList.print();
