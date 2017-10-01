import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article.js';

import styles from './styles/Main.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>

        <Article title='' postDate=''
          p1=''
          p2=''
          p3=''
          p4=''
          p5=''
          p6='' />

        <Article title='' postDate=''
          p1=''
          p2=''
          p3=''
          p4=''
          p5=''
          p6='' />

        <Article title='' postDate=''
          p1=''
          p2=''
          p3=''
          p4=''
          p5=''
          p6='' />
          
      </div>
    );
  }
}
