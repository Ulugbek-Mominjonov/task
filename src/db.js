import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  cart: '++id, name, desc, price, count, imgSrc',
});
