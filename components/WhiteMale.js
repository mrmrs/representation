var html = require('choo/html')
var css = require('sheetify')

var cxCell = css`
  :host {
    box-sizing: border-box;
    height: 1.5rem;
    width: 2rem;
    padding: 1.25rem;
    border-right: 1.px solid black;
    border-bottom: 1px solid black;
    font-size: 10px;
    vertical-align: top;
    display: inline-block;
  }
`

var cxText = css`
  :host {
    margin: 0;
    padding: 0;
    fontSize: 4px;
    fontWeight: 400;
  }
`

module.exports = WhiteMale

function WhiteMale (args) {
  var data = args.data

  return html`
    <section>
      <h2 class='f5 fw6 mb1'>${data.title}</h2>
      <div class='bl bt dib'>
      ${data.items.map((item, i) => html`
        <div key=${i} class=${cxCell}>
          <h1 class=${cxText}>${item.title}</h1>
          <h2 class=${cxText}>${item.name}</h2>
        </div>
      `)}
      </div>
    </section>
  `
}
