import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'

import styles from './styles/Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>DANNO.WORLD</h1>
        <h3 className={styles.title}>BLOG</h3>
      </div>
    );
  }
}
