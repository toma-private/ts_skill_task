const obj = {
  name: 'hoge',
  age: 1,
};

const obj2 = obj;  // 参照渡し

let ary = [obj, obj2, obj];  // 全て最初のobjの時に生成されたメモリを参照しているので、どこが変わっても全て同じ値になる

const ary2 = ary;  // 参照渡し

ary[0] = {
  name: 'fuga',
  age: 2,
};  // この時点でaryもary2も全て { fuga, 2 } X // 参照切り

ary2[2] = {
  name: 'fugafuga',
  age: 222222,
};  // この時点でaryもary2も全て{ 'fugafuga', 222222 } X // 参照切り

// ↓ログで何が表示される？？
console.log(ary);
// [{ ‘fugafuga’, 222222 }, { ‘fugafuga’, 222222 }, { ‘fugafuga’, 222222 }]

// 正解：[{ ‘fuga’, 2 }, { ‘hoge’, 1 }, { ‘fugafuga’, 222222 }]