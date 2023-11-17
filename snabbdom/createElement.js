/**
 * createElement
 * The createElement function takes in a vnode (virtual node) object and creates a corresponding DOM element.
 * If the vnode has vnode.children, it recursively calls createElement on each child and appends the resulting DOM elements to the newly created DOM element.
 *
 *
 *
 */
export default function createElement(vnode) {
  // It starts by creating a new DOM element with the tag name specified in vnode.sel.
  let node = document.createElement(vnode.sel);
  // 有子节点还是文本？
  if (
    vnode.text !== '' &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 是个文本节点
    let textNode = document.createTextNode(vnode.text);
    node.appendChild(textNode);
  } else if (
    vnode.children !== undefined &&
    vnode.children.length > 0
  ) {
    // 有子节点
    for (let i = 0; i < vnode.children.length; i++) {
      const childNode = createElement(vnode.children[i]);
      node.appendChild(childNode);
    }
  }
  vnode.elm = node;
  // Finally, the vnode.elm property is set to the newly created DOM element and returned.
  return node;
}
