var html = require('choo/html')
var cxs = require('cxs').default

module.exports = Stats

function Stats (args) {
  var population = args.population
  var wm = args.wm

  var populationPercentage = ((wm / population) * 100).toFixed(2)

  var cx = {
    root: cxs({
      marginBottom: '1rem'
    }),
    title: cxs({
      marginTop: '0',
      marginBottom: '1rem',
      padding: '0',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5'
    }),
    description: cxs({
      margin: '0',
      padding: '0',
      fontSize: '.75rem',
      fontWeight: '400',
      lineHeight: '1.5'
    })
  }

  return html`
    <header className=${cx.root}>
      <h1 className=${cx.title}>
        In 1790 white males made up <b>${populationPercentage}%</b> of the U.S. population
      </h1>
      <h2 className=${cx.description}>Population Total: ${population}</h2>
    </header>
   `
}
