import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import styles from './styles/Article.scss';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.titleBar}>
          <h1 className={styles.title}>{this.props.title}</h1>
          <h2 className={styles.date}>{this.props.postDate}</h2>
        </div>
        <p className={styles.para}>{this.props.p1}</p>
        <p className={styles.para}>{this.props.p2}</p>
        <p className={styles.para}>{this.props.p3}</p>
        <p className={styles.para}>{this.props.p4}</p>
        <p className={styles.para}>{this.props.p5}</p>
        <p className={styles.para}>{this.props.p6}</p>
      </div>
    );
  }
}

Article.PropTypes = {
  title: PropTypes.string,
  postDate: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  p4: PropTypes.string,
  p5: PropTypes.string,
  p6: PropTypes.string,
}
