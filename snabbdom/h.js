import vnode from './vnode'

/**
 * h 函数 简配版
 * 形态1： h('div', {}, 'text')
 * 形态2： h('div', {}, [h()])
 * 形态3： h('div', {}, h())
 */
export default function h (sel, props, c) {
  if (arguments.length !== 3) {
    throw new Error('简配版h()函数需要三个参数');
  }
  let node;
  // 判断c的类型
  const type = Object.prototype.toString.call(c);
  switch (type) {
    case '[object String]':
    case '[object Number]':
      node = vnode(sel, props, undefined, c, undefined)
      break;
    case '[object Array]':
      // 说明现在调用h()函数的形态3模式
      // 遍历c 验证数组中是否有不合法的h函数
      for (let i = 0; i < c.length; i++) {
        const cType = Object.prototype.toString.call(c[i]);
        if (!(cType === '[object Object]' && c[i].hasOwnProperty('sel'))) {
          throw new Error('传入的数组项中有不是h()函数的项，请检查')
        }
      }
      node = vnode(sel, props, c, undefined, undefined)
      break;
    case '[object Object]':
      node = vnode(sel, props, [c], undefined, undefined)
      break;
    default:
      throw new Error('传入的第三个参数类型有误，请检查')
  }
  return node;
}
