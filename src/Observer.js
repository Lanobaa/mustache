import { definePropertyFn } from './def.js'
import { defineReactive } from "./defineReactive.js";
import { arrMethods } from "./array.js";
export default class Observer {
  constructor(value) {
    console.log('observer...class..', value);
    definePropertyFn(value, '__ob__', this, false);
    if (Array.isArray(value)) {
      console.log('okl.....' );
      Object.setPrototypeOf(value, arrMethods)
    } else {
      this.circulation(value);
    }
  }
  circulation(value) {
    // 监听每个属性
    for (let k in value) {
      defineReactive(value, k)
    }
  }
}
