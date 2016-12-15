import React from 'react'
import cxs from 'cxs'


const ActualPopulation = ({
    data,
    wm,
    population,
    empty,
    cells,
    ...props
}) => {

    const populationPercentage = ((wm / population) * 100).toFixed(2);
    const populationPercentageRounded = (wm / population);

    const unfilled = (cells * populationPercentageRounded).toFixed(0);
    const filledCount = cells - unfilled;
    const filledCells = [];
    const unfilledCells = [];

    const cx = { 
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
            verticalAlign: 'top',
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

    for (var i=0; i < filledCount; i++) {
            filledCells.push(<div className={cx.filled} key={i} />);
    }
    for (var x=0; x < unfilled; x++) {
            unfilledCells.push(<div className={cx.unfilled} key={x}/>);
    }

    return (
            <section className={cx.root}>
              <h2 className='f5 fw6 mt2 mb1'>Equal Representation</h2>
              <div className="dib bt bl">
                  {filledCells}
                  {unfilledCells}
              </div>
            </section>
           )
}


export default ActualPopulation
