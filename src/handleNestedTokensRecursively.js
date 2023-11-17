import renderTemplate from "./renderTemplate.js";
export default function handleNestedTokensRecursively(token, data) {
  console.log('token..d..', token);
  console.log('data.d..', data);
  let domStr = '';
  for (let item of data) {
    domStr += renderTemplate(token, item);
  }
  return domStr;
}
