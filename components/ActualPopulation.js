var html = require('choo/html')
var css = require('sheetify')

var cxRoot = css`
  :host { margin-bottom: 3rem }
`

var cxFilled = css`
  :host {
    box-sizing: border-box;
    font-size: 1.25rem;
    font-weight: bold;
  }
`
var cxUnfilled = css`
  :host {
    vertical-align: top;
    box-sizing: border-box;
    background: #fff;
    height: 1.5rem;
    width: 2rem;
    display: inline-block;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 0;
  }
`

module.exports = ActualPopulation

function ActualPopulation (args) {
  var population = args.population
  var cells = args.cells
  var wm = args.wm

  var populationPercentageRounded = (wm / population)

  var unfilled = (cells * populationPercentageRounded).toFixed(0)
  var filledCount = cells - unfilled
  var filledCells = []
  var unfilledCells = []

  for (var i = 0; i < filledCount; i++) {
    filledCells.push(html`<div className=${cxFilled} key=${i} />`)
  }
  for (var x = 0; x < unfilled; x++) {
    unfilledCells.push(html`<div className=${cxUnfilled} key=${x} />`)
  }

  return html`
    <section className=${cxRoot}>
      <h2 className='f5 fw6 mt2 mb1'>Equal Representation</h2>
      <div className="dib bt bl">
        ${filledCells}
        ${unfilledCells}
      </div>
    </section>
   `
}
