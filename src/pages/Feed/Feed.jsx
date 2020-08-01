import React from 'react';
import Container from '@material-ui/core/Container';
import HighlightArea from './Areas/HighlightArea/HighlightArea';
import FeedArea from './Areas/FeedArea/FeedArea';
import './Feed.css';

const Feed = () => {
  return (
    <Container>
      <div className='insta-app'>
        <FeedArea className='feed-area' />
        <HighlightArea className='highlight-area' />
      </div>
    </Container>
  );
};

export default Feed;
