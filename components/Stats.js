var html = require('choo/html')
var css = require('sheetify')

var cxRoot = css`
  :host { margin-bottom: 1rem; }
`

var cxTitle = css`
  :host {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`

var cxDescription = css`
  :host {
    margin: 0;
    paddingt: 0;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.5;
  }
`

module.exports = Stats

function Stats (args) {
  var population = args.population
  var wm = args.wm
  var populationPercentage = ((wm / population) * 100).toFixed(2)

  return html`
    <header className=${cxRoot}>
      <h1 className=${cxTitle}>
        In 1790 white males made up <b>${populationPercentage}%</b> of the U.S. population
      </h1>
      <h2 className=${cxDescription}>Population Total: ${population}</h2>
    </header>
   `
}
