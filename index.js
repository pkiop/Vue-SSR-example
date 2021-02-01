// Step 1: Create a Vue instance
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

const context = {
  title: 'hello',
  meta: `
    <meta ...>
    <meta ...>
  `
}

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

renderer.renderToString(app, context).then(html => {
  console.log(html) // will be the full page with app content injected.
}).catch(err => {
  console.error(err);
})
