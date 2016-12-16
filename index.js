var mount = require('choo/mount')
var html = require('choo/html')
var css = require('sheetify')
var choo = require('choo')

var ActualPopulation = require('./components/ActualPopulation')
var WhitePerson = require('./components/WhitePerson')
var Stats = require('./components/Stats')

var data = require('./data')

css`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

css('tachyons')

var app = choo()
app.router(['/', mainView])
mount('body', app.start())

function mainView () {
  return html`
    <body class="App pa4">
      ${Stats({ wm: '1598944', population: '3893635' })}

      ${WhitePerson({ data: data.collections[0] })}
      ${ActualPopulation({ data: data.collections[0], cells: data.collections[0].items.length, wm: '1598944', population: '3893635' })}

      ${WhitePerson({ data: data.collections[1] })}
      ${ActualPopulation({ data: data.collections[1], cells: data.collections[1].items.length, wm: '1598944', population: '3893635' })}

      ${WhitePerson({ data: data.collections[2] })}
      ${ActualPopulation({ data: data.collections[2], cells: data.collections[2].items.length, wm: '1598944', population: '3893635' })}
    </body>
  `
}
