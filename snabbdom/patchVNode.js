import createElement from "./createElement.js";
import updateChildren from "./updateChildren.js";
export default function patchVNode (oldVNode, newVNode) {
  // yes
  // oldVNode和newVNode是否是同一个对象
  console.log('oldVNode === newVNode',  oldVNode === newVNode);
  if (oldVNode === newVNode) return;
  if (
    newVNode.text &&
    newVNode.text !== '' &&
    (newVNode.children === undefined || newVNode.children.length === 0)
  ) {
    // 新节点有text属性 judge newVNode.text和oldVNode.text是否不同
    console.log('这里应该是...', oldVNode.text !== newVNode.text);
    if (oldVNode.text !== newVNode.text) {
      console.log('相同节点，不同文本');
      oldVNode.elm.innerText = newVNode.text;
    }
  } else if (
    newVNode.children != null &&
    newVNode.children.length > 0
  ) {
    // 新节点有children子元素
    // judge 老节点是否有子节点
    if (oldVNode.children != null && oldVNode.children.length > 0) {
      console.log('都有子节点，应该递归');
      updateChildren(oldVNode.elm, oldVNode.children, newVNode.children)
    } else {
      // 老节点没有子节点，新的有子节点
      oldVNode.elm.innerText = '';
      // 直接更新新虚拟DOM对象下的所有子虚拟节点到真实的老DOM节点下
      for (let i = 0; i < newVNode.children.length; i++) {
        const childNode = createElement(newVNode.children[i]);
        oldVNode.elm.appendChild(childNode);
      }
    }
  }
}
