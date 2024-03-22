import { definePropertyFn } from './def.js';
// 首先拿到数组的原型对象
let arrProto = Array.prototype;
// 创建一个新对象，并以数组原型对象为原型对象 并export
export let arrMethods = Object.create(arrProto);
// 重写数组的方法
const methodNames = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];


methodNames.forEach((name) => {
  // 备份原来的方法
  const originalMethod = arrProto[name];
  console.log('name...', name);
  definePropertyFn(arrMethods, name, function (...arg) {
    console.log('----啦啦啦----', arg);
  }, false)


})
console.log('arr.methods..', arrMethods);

