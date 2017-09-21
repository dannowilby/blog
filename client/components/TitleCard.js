import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'

import styles from './styles/TitleCard.scss';

export default class TitleCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    var sizeX;
    var sizeY;

    sizeX = 20;
    sizeY = 11.5;

    var style = {
      width: sizeX + 'em',
      height: sizeY + 'em',
      background: 'url(' + this.props.pic + ') no-repeat',
      backgroundSize:  sizeX + 'em ' + sizeY + 'em'
    };
    return (
      <div style={ style } className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.text}>{this.props.title}</h2>
          <h3 className={styles.date}>{this.props.date}</h3>
        </div>
      </div>
    );
  }
}

TitleCard.PropTypes = {
  pic: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}
