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
/*
// case 2
const symbolNode = h('section', {}, 'initial, I am new htmlDocument')
const newSymbol = h('section', {}, [
  h('div', {}, '我是一个section Tag one'),
  h('div', {}, '我是一个section Tag two'),
])
*/
/*

// case3
const symbolNode = h('ul', { }, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'E' }, 'D'),
  h('li', { key: 'F' }, 'F'),
  h('li', { key: 'G' }, 'G'),
]);
const newSymbol = h('ul', { }, [
  h('li', { key: 'A' }, 'AAAAA'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'Q' }, 'Q'),
  h('li', { key: 'E' }, 'D'),
  h('li', { key: 'F' }, 'F'),
  h('li', { key: 'G' }, 'G'),
]);
*/

// case 4
const symbolNode = h('ul', { }, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'f' }, 'f'),
  h('li', { key: 'g' }, 'g'),
  h('li', { key: 'k' }, 'k'),
]);
const newSymbol = h('ul', { }, [
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'A' }, 'A'),
]);

const container = document.getElementById('app');
patch(container, symbolNode)

const btn = document.getElementsByTagName('button')[0];
btn.onclick = function() {
  patch(symbolNode, newSymbol)
}
