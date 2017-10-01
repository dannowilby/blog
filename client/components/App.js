import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'

import Header from './Header.js';
import Main from './Main.js';

import styles from './styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className={styles.content}>
        <Header />
        <Switch>
            <Route exact path='/' component={Main} />
        </Switch>
      </main>
    );
  }
}
