import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import Masonry from 'react-masonry-component';

import TitleCard from './TitleCard.js';

import styles from './styles/Main.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <Masonry>
          <TitleCard
                     pic='https://www.wendywutours.co.uk/resource/upload/330/tiananmen-square-beijing-china-gate-of-heavenly-peace.jpg'
                     title='Chinas Responsibility'
                     date='21 Septenber 2017' />
          <TitleCard
                     pic='http://ngs-remote-video-import.s3.amazonaws.com/7e/1c/26c978d44a94bbc10bbe13f939d7/see-how-life-has-changed-in-the-middle-east-over-48-years.jpg'
                     title='Trouble in the Middle East'
                     date='20 Septenber 2017' />
        </Masonry>
      </div>
    );
  }
}
