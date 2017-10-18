

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }

  getData() {
  // make ajax call
  }

  render () {
    return <button className="button">Hello </button>
  }
}

render(<App/>, document.getElementById('app'));
