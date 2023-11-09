export default function nestTokens(tokens) {
  const nestedTokens = [];
  // 多添加一个指针
  let collector = nestedTokens;
  const tempStackCollection = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    switch (token[0]) {
      case '#':
        collector.push(token)
        tempStackCollection.push(token)
        collector = token[2] = []
        break
      case '/':
        tempStackCollection.pop()
        collector = tempStackCollection.length > 0
          ? tempStackCollection[tempStackCollection.length - 1][2]
          : nestedTokens
        break
      default:
        collector.push(token)
    }
  }
  return nestedTokens
}
