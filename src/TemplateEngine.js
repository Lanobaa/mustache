import parseTemplateToTokens from "./parseTemplateToTokens.js"
import renderTemplate from "./renderTemplate.js"
window.TemplateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr)
    document.querySelector('#app').innerHTML = renderTemplate(tokens, data)
  }
}
