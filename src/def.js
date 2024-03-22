export let definePropertyFn = (obj, key, value, enumerable) => {
  Object.defineProperty(obj, key, {
    enumerable: !!enumerable,
    configurable: true,
    writable: true,
    value
  })
}
