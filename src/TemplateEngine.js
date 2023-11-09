import parseTemplateToTokens from "./parseTemplateToTokens.js"

window.TemplateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr)
    console.log('tokens..', tokens);
  }
}
