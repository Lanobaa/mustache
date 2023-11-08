import Scanner from './Scanner'

window.TemplateEngine = {
  render(templateStr, data) {
    console.log('data..', data)
    const scanner = new Scanner(templateStr)
  }
}
