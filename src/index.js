import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider>
    <Game />
  </Provider>,
  document.getElementById('root')
);
