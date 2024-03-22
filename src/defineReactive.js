
import { observe } from './Observe.js';
let defineReactive = (data, key, ...args) => {
  let val = args[0];
  if (args.length === 0) {
    val = data[key]
  }
  let childOb = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('get..', val);
      return val;
    },
    set(newVal) {
      console.log('set..', newVal, val);
      if (newVal !== val) {
        val = newVal;
        childOb = observe(newVal)
      }
    }
  })
}

export { defineReactive };
