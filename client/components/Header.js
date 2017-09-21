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

        <div className={styles.top}>
          <div className={styles.inner}>
            <div className={styles.topI}>
              <a style={ { marginRight: '1em' } }>About</a>
              <a>Support</a>
              <a style={ { float: 'right' } }>Contact</a>
            </div>
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.inner}>
            <div className={styles.midI}>
              <h1 className={styles.title}>DANNO.WORLD</h1>
              <h3 className={styles.motto}>A blog about writing, programming, and life.</h3>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.inner}>
            <div className={styles.botI}>
              <a className={styles.button}>Creative</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
