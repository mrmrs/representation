var html = require('choo/html')
var cxs = require('cxs').default

module.exports = WhiteMale

function WhiteMale (args) {
  var data = args.data

  var cx = {
    root: cxs({}),
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
    text: cxs({
      margin: '0',
      padding: '0',
      fontSize: '4px',
      fontWeight: '400'
    })
  }

  return html`
    <section className=${cx.root}>
      <h2 className='f5 fw6 mb1'>${data.title}</h2>
      <div className='bl bt dib'>
      ${data.items.map((item, i) => html`
        <div key=${i} className=${cx.cell}>
          <h1 className=${cx.text}>${item.title}</h1>
          <h2 className=${cx.text}>${item.name}</h2>
        </div>
      `)}
      </div>
    </section>
  `
}
