import React, { Component } from 'react';
import './App.css';
import data from './data'
import WhitePerson from './components/WhitePerson'
import ActualPopulation from './components/ActualPopulation'
import Stats from './components/Stats'

class App extends Component {
  render() {
    return (
      <div className="App pa4">
          <Stats wm="1598944" population="3893635" />
          <WhitePerson data={data.collections[0]} />
          <ActualPopulation data={data.collections[0]} cells={data.collections[0].items.length} wm="1598944" population="3893635" />

          <WhitePerson data={data.collections[1]} />
          <ActualPopulation data={data.collections[1]} cells={data.collections[1].items.length} wm="1598944" population="3893635" />

          <WhitePerson data={data.collections[2]} />
          <ActualPopulation data={data.collections[2]} cells={data.collections[2].items.length} wm="1598944" population="3893635" />
      </div>
    );
  }
}

export default App;
