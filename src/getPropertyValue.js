export default function getPropertyValue(obj, propertyPath) {
  if (propertyPath === '.') return obj
  const properties = propertyPath.split('.')
  let result = obj;
  for (let property of properties) {
    result = result[property];
  }
  return result;
}
