import './style.css'
import './src/TemplateEngine'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// const templateStr = `<h1>我买了{{thing}}，{{mood}}</h1>`
const templateStr = `
<div>
    <ol>
        {{#students}}
        <li>
            学生{{item.name}}的爱好是
            <ol>
                {{#item.hobbies}}
                <li>{{.}}</li>
                {{/item.hobbies}}            
            </ol>
        </li>
        {{/students}}
    </ol>
    <ol>
        {{#teachers}}
        <li>
            老师{{item.name}}的爱好是
            <ol>
                {{#item.hobbies}}
                <li>{{.}}</li>
                {{/item.hobbies}}            
            </ol>
        </li>
        {{/students}}
    </ol>
</ol>
</div>
`
window.TemplateEngine.render(templateStr);
