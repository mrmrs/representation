var html = require('choo/html')
var cxs = require('cxs').default

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

  var cx = {
    root: cxs({
      marginBottom: '3rem'
    }),
    cell: cxs({
      boxSizing: 'border-box',
      height: '1.5rem',
      width: '2rem',
      padding: '.125rem',
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      fontSize: '10px',
      verticalAlign: 'top',
      display: 'inline-block'
    }),
    header: cxs({
      marginTop: '.25rem',
      marginBottom: '0',
      padding: '0',
      fontSize: '.875rem',
      fontWeight: '500',
      lineHeight: '1.5'
    }),
    title: cxs({
      fontSize: '1.25rem',
      fontWeight: 'bold'
    }),
    filled: cxs({
      boxSizing: 'border-box',
      background: '#000',
      height: '1.5rem',
      width: '2rem',
      display: 'inline-block',
      verticalAlign: 'top'
    }),
    unfilled: cxs({
      verticalAlign: 'top',
      boxSizing: 'border-box',
      background: '#fff',
      height: '1.5rem',
      width: '2rem',
      display: 'inline-block',
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      margin: '0',
      padding: '0'
    }),
    text: cxs({
      margin: '0',
      padding: '0',
      fontSize: '.75rem',
      fontWeight: '400',
      lineHeight: '1.5'
    })
  }

  for (var i = 0; i < filledCount; i++) {
    filledCells.push(html`<div className=${cx.filled} key=${i} />`)
  }
  for (var x = 0; x < unfilled; x++) {
    unfilledCells.push(html`<div className=${cx.unfilled} key=${x} />`)
  }

  return html`
    <section className=${cx.root}>
      <h2 className='f5 fw6 mt2 mb1'>Equal Representation</h2>
      <div className="dib bt bl">
        ${filledCells}
        ${unfilledCells}
      </div>
    </section>
   `
}
