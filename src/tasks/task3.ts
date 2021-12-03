// Level.1
export const array: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
//TODO 参照を切ってコピーしてください
const _array: string[] = array;
_array.pop();
array.push('test');
for (let i = 0; 10 > i; i++) {
  array.push(String(i));
}
_array.splice(2, 3);
// ２つの配列の値が変わるようにする
console.log('array: ', array);
console.log('_array: ', _array);
// Level.2
type Array2Type = {
  id: string,
  name: string,
  age: number,
}
export const array2: Array2Type[] = [
  {
    id: '0',
    name: 'satou',
    age: 18,
  },
  {
    id: '1',
    name: 'tanaka',
    age: 32,
  },
  {
    id: '2',
    name: 'suzuki',
    age: 25,
  },
  {
    id: '3',
    name: 'takahashi',
    age: 13,
  },
];
//TODO 参照を切ってコピーしてください
const _array2: Array2Type[] = array2;
for (let i = 0; i < array2.length; i++) {
  array2[i].id = '0';
  array2[i].name = 'yamada';
  array2[i].age = 99;
}
_array2[3].age = 0;
array2[1].name = 'oota';
_array2[2].id = 'test';
// ２つの配列の値が変わるようにする
console.log('array2: ', array2);
console.log('_array2: ', _array2);
// Level.3
type Array3Type = {
  id: string,
  name: string,
  age: number,
  createdAt: Date,
  greeting: () => void
}
const greeting = () => {
  console.log('Hello!');
};
export const array3: Array3Type[] = [
  {
    id: '0',
    name: 'satou',
    age: 18,
    createdAt: new Date(),
    greeting,
  },
  {
    id: '1',
    name: 'tanaka',
    age: 32,
    createdAt: new Date(),
    greeting,
  },
  {
    id: '2',
    name: 'suzuki',
    age: 25,
    createdAt: new Date(),
    greeting,
  },
  {
    id: '3',
    name: 'takahashi',
    age: 13,
    createdAt: new Date(),
    greeting,
  },
];
//TODO 参照を切ってコピーしてください
const _array3: Array3Type[] = array3;
for (let i = 0; i < array3.length; i++) {
  array3[i].id = '0';
  array3[i].name = 'yamada';
  array3[i].age = 99;
}
_array3[3].age = 0;
array3[1].name = 'oota';
_array3[2].id = 'test';
// ２つの配列の値が変わるようにする
console.log('array3: ', array3);
console.log('_array3: ', _array3);
// 両方出力される
array3[0].greeting();
_array3[0].greeting();