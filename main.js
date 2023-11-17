import h from './snabbdom/h'
import patch from './snabbdom/patch'
import vnode from "./snabbdom/vnode.js";

const vNode = h('ul', {}, [
  h('li', {}, [
    h('h1', {}, '我买了apple，并且非常happy'),
    h('ol', {}, [
      h('li', {}, '学生小明的爱好是swimming、exercise'),
      h('li', {}, '学生小红的爱好是football、basketball、badminton'),
      h('li', {}, '学生小强的爱好是eat、sleep')
    ]),
    h('ol', {}, [
      h('li', {}, '老师lao小明的爱好是swimming、exercise'),
      h('li', {}, '老师lao小红的爱好是football、basketball、badminton'),
      h('li', {}, '老师lao小强的爱好是eat、sleep')
    ])
  ]),
]);
const myNode2 = h('span', {}, 'hello world');
const myNode = h('ul', {}, [
  h('li', {}, '你好，'),
  h('li', {}, '中国，'),
  h('li', {}, [
    h('ol', {}, [
      h('li', {}, 'conversation'),
      h('li', {}, 'communicate'),
      h('li', {}, 'chat')
    ])
  ]),
  h('li', {}, '中国，'),
])


/*
// case 1
const symbolNode = h('section', {}, '我是一个section Tag')
const newSymbol = h('section', {}, '我是第二个section tag，and I am new')
*/

// case 2
const symbolNode = h('section', {}, '我是第二个section tag，and I am new')
const newSymbol = h('section', {}, [
  h('div', {}, '我是一个section Tag one'),
  h('div', {}, '我是一个section Tag two'),
])

const container = document.getElementById('app');
patch(container, symbolNode)

const btn = document.getElementsByTagName('button')[0];
btn.onclick = function() {
  patch(symbolNode, newSymbol)
}
