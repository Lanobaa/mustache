
import { observe } from './src/Observe.js';
let obj = {
  a: {
    m: {
      n: 5,
    }
  },
  b: 10,
  c: [1, 2, 3, 4]
}

const ob = observe(obj);
console.log('ob...', ob)
console.log('value...', obj);
obj.c.push(55);
// obj.c.push(88);
// console.log('result...', obj.c);
