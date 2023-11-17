import getPropertyValue from "./getPropertyValue.js";
import handleNestedTokensRecursively from "./handleNestedTokensRecursively.js";
export default function renderTemplate(tokens, data) {
  let domStr = '';
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    switch(token[0]) {
      case 'text':
        domStr += token[1];
        break;
      case 'name':
        domStr += getPropertyValue(data, token[1]);
        break;
      case '#':
        domStr += handleNestedTokensRecursively(token[2], getPropertyValue(data, token[1]))
        break;
      default:
    }
  }
  return domStr;
}
