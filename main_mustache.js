import './style.css'
import './src/TemplateEngine'

/*document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`*/

/*const templateStr = `<h1>我买了{{thing}}，并且非常{{mood}}</h1>`
const data = {
  thing: 'apple',
  mood: 'happy'
}*/
const templateStr = `
<div>
    <ol>
        {{#students}}
          <li>
              学生{{name}}的爱好是
              <ol>
                  {{#hobbies}}
                  <li>{{.}}</li>
                  {{/hobbies}}
              </ol>
          </li>
        {{/students}}
    </ol>
    <ol>
        {{#teachers}}
        <li>
            老师{{name}}的爱好是
            <ol>
                {{#hobbies}}
                <li>{{.}}</li>
                {{/hobbies}}
            </ol>
        </li>
        {{/teachers}}
    </ol>
</ol>
</div>
`
const data = {
  students: [
    { name: '小明', hobbies: ['swimming', 'exercise'] },
    { name: '小红', hobbies: ['football', 'basketball', 'badminton'] },
    { name: '小强', hobbies: ['eat', 'sleep'] },
  ],
  teachers: [
    { name: 'lao小明', hobbies: ['swimming', 'exercise'] },
    { name: 'lao小红', hobbies: ['football', 'basketball', 'badminton'] },
    { name: 'lao小强', hobbies: ['eat', 'sleep'] },
  ]
}
window.TemplateEngine.render(templateStr, data);
