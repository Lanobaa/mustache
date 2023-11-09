import Scanner from './Scanner'
import nestTokens from "./nestTokens"
export default function parseTemplateToTokens(templateStr) {
  const tokens = []
  const scanner = new Scanner(templateStr)
  let words
  while (scanner.scanningStatus()) {
    words = scanner.scanCharacterString('{{')
    tokens.push(['text', words])
    scanner.scanSkipTag('{{')
    words = scanner.scanCharacterString('}}')
    if (words) {
      if (words[0] === '#') {
        tokens.push(['#', words.substring(1)])
      } else if (words[0] === '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
      scanner.scanSkipTag('}}')
    }
  }
  return nestTokens(tokens)
}
