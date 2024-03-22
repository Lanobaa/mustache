import patchVNode from "./patchVNode.js";
import createElement from "./createElement.js";
const checkSameKeyAndSameSelOfVNode = (oldVNode, newVNode) => {
  return (
    oldVNode.sel === newVNode.sel &&
    oldVNode.key === newVNode.key
  );
};
export default function updateChildren(parentElm, oldCh, newCh) {
  // 旧前节点指针
  let oldStartIdx = 0;
  // 新前节点指针
  let newStartIdx = 0;
  // 旧后节点指针
  let oldEndIdx = oldCh.length - 1;
  // 新后节点指针
  let newEndIdx = newCh.length - 1;
  // 旧前节点
  let oldStartVNode = oldCh[oldStartIdx];
  // 旧后节点
  let oldEndVNode = oldCh[oldEndIdx];
  // 新前节点
  let newStartVNode = newCh[newStartIdx];
  // 新后节点
  let newEndVNode = newCh[newEndIdx];

  let keyMap = null;

  let i = 0;
  // 循环判断
  // 旧前节点下标值小于等于旧后节点下标值
  // 并且
  // 新前节点下标值小于等于新后节点下标值
  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (checkSameKeyAndSameSelOfVNode(oldStartVNode, newStartVNode)) {
      console.log('命中...旧前 和 新前');
      // 旧前节点和新前节点相同
      patchVNode(oldStartVNode, newStartVNode);
      // 旧节点指针后移一位
      oldStartVNode = oldCh[++oldStartIdx];
      // 新节点指针后移一位
      newStartVNode = newCh[++newStartIdx];
      console.log('相同节点，（后-前） 指针后移', i);
    } else if (checkSameKeyAndSameSelOfVNode(oldEndVNode, newEndVNode)) {
      // 旧后节点和新后节点相同
      patchVNode(oldEndVNode, newEndVNode);
      // 旧节点指针前移一位
      oldEndVNode = oldCh[--oldEndIdx];
      // 新节点指针前移一位
      newEndVNode = newCh[--newEndIdx];
    } else if (checkSameKeyAndSameSelOfVNode(oldStartVNode, newEndVNode)) {
      console.log('命中...旧前 和 新后');
      // 旧前 与 新后
      patchVNode(oldStartVNode, newEndVNode);
      /**
       * 当 旧前指针 和 新后指针 命中时
       * 移动旧前指针的这个DOM节点 到 旧后指针的这个DOM节点 后面
       **/
      parentElm.insertBefore(oldStartVNode.elm, oldEndVNode.elm.nextSibling);
      oldStartVNode = oldCh[++oldStartIdx];
      newEndVNode = newCh[--newEndIdx];
    } else if (checkSameKeyAndSameSelOfVNode(oldEndVNode, newStartVNode)) {
      patchVNode(oldEndVNode, newStartVNode);
      parentElm.insertBefore(oldEndVNode.elm, oldStartVNode.elm);
      oldEndVNode = oldCh[--oldEndIdx];
      newStartVNode = newCh[++newStartIdx];
    } else {
      // 都没匹配到
      // 首先判断keyMap是否存在
      // 如果不存在则说明是第一次遍历
      if (!keyMap) {
        // 先收集老节（虚拟）点中的key
        keyMap = {};
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i].key;
          if (key) {
            keyMap[key] = i;
          }
        }
      }
      const idxInOld = keyMap[newStartVNode.key];
      if (idxInOld) {
        // idxInOld 存在，表示是已存在的节点
        const elmToMove = oldCh[idxInOld];
        patchVNode(elmToMove, newStartVNode);
        parentElm.insertBefore(elmToMove.elm, oldStartVNode.elm);
        oldCh[idxInOld] = undefined;
        oldStartVNode = oldCh[++oldStartIdx];
      } else {
        // idxInOld不存在表示是一个新的节点，需要添加
        const elm = createElement(newStartVNode);
        parentElm.insertBefore(elm, oldStartVNode.elm);
        newStartIdx = newCh[++newStartIdx];
      }
    }
    i++;
  }
  // 循环完成之后
  if (newStartIdx <= newEndIdx) {
    const before = newCh[newEndIdx + 1] ? newCh[newEndIdx + 1].elm : null;
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), before);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    console.log('run.this.here..', oldStartIdx, oldEndIdx);
    console.log('new..idx..', newStartIdx, newEndIdx);
    // for (let i = oldStartIdx; i <= oldEndIdx; i++) {
    //   parentElm.removeChild(oldCh[i].elm);
    // }
  }
}
