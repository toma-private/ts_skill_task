"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.array3 = exports.array2 = exports.array = void 0;
var lodash = require("lodash");
var _lodash = lodash;
// Level.1
exports.array = ['a', 'b', 'c', 'd', 'e', 'f'];
//TODO 参照を切ってコピーしてください
var _array = __spreadArray([], exports.array, true);
_array.pop();
exports.array.push('test');
for (var i = 0; 10 > i; i++) {
    exports.array.push(String(i));
}
_array.splice(2, 3);
// ２つの配列の値が変わるようにする
console.log('array: ', exports.array);
console.log('_array: ', _array);
exports.array2 = [
    {
        id: '0',
        name: 'satou',
        age: 18
    },
    {
        id: '1',
        name: 'tanaka',
        age: 32
    },
    {
        id: '2',
        name: 'suzuki',
        age: 25
    },
    {
        id: '3',
        name: 'takahashi',
        age: 13
    },
];
//TODO 参照を切ってコピーしてください
var _array2 = _lodash.cloneDeep(exports.array2);
for (var i = 0; i < exports.array2.length; i++) {
    exports.array2[i].id = '0';
    exports.array2[i].name = 'yamada';
    exports.array2[i].age = 99;
}
_array2[3].age = 0;
exports.array2[1].name = 'oota';
_array2[2].id = 'test';
// ２つの配列の値が変わるようにする
console.log('array2: ', exports.array2);
console.log('_array2: ', _array2);
var greeting = function () {
    console.log('Hello!');
};
exports.array3 = [
    {
        id: '0',
        name: 'satou',
        age: 18,
        createdAt: new Date(),
        greeting: greeting
    },
    {
        id: '1',
        name: 'tanaka',
        age: 32,
        createdAt: new Date(),
        greeting: greeting
    },
    {
        id: '2',
        name: 'suzuki',
        age: 25,
        createdAt: new Date(),
        greeting: greeting
    },
    {
        id: '3',
        name: 'takahashi',
        age: 13,
        createdAt: new Date(),
        greeting: greeting
    },
];
//TODO 参照を切ってコピーしてください
var _array3 = _lodash.cloneDeep(exports.array3);
for (var i = 0; i < exports.array3.length; i++) {
    exports.array3[i].id = '0';
    exports.array3[i].name = 'yamada';
    exports.array3[i].age = 99;
}
_array3[3].age = 0;
exports.array3[1].name = 'oota';
_array3[2].id = 'test';
// ２つの配列の値が変わるようにする
console.log('array3: ', exports.array3);
console.log('_array3: ', _array3);
// 両方出力される
exports.array3[0].greeting();
_array3[0].greeting();
