import vnode from "./vnode.js";
import createElement from "./createElement.js";
import patchVNode from "./patchVNode.js";
export default function patch (oldVNode, newVNode) {
  // 判断oldVNode是否是一个虚拟节点
  if (oldVNode.sel === '' || oldVNode.sel === undefined) {
    // 传入的oldVNode是dom节点，需要转换成虚拟节点
    console.log('-------------是真实的dom节点-------------');
    oldVNode = vnode(
      oldVNode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVNode
    )
  }
  // 判断oldVNode和newVNode是不是同一个节点
  if (
    oldVNode.sel === newVNode.sel &&
    oldVNode.key === newVNode.key
  ) {
    patchVNode(oldVNode, newVNode);
  } else {
    // 不是同一个节点，插入新节点，删除旧节点
    const newNodeElm = createElement(newVNode)
    console.log('new.node.elm..', newNodeElm);
    oldVNode.elm.parentNode.insertBefore(newNodeElm, oldVNode.elm)
    oldVNode.elm.parentNode.removeChild(oldVNode.elm)
  }
}
