import React from 'react'
import cxs from 'cxs'

const Stats = ({
    wm,
    population,
    ...props
}) => {

    const populationPercentage = ((wm / population) * 100).toFixed(2);
    const populationPercentageRounded = (wm / population);


    const cx = { 
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

    return (
            <header className={cx.root}>
              <h1 className={cx.title}>In 1790 white males made up <b>{populationPercentage}%</b> of the U.S. population</h1>
              <h2 className={cx.description}>Population Total: {population}</h2>
            </header>
           )
}


export default Stats
