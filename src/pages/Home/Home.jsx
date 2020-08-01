import React from 'react';
import Container from '@material-ui/core/Container';
import HighlightArea from './Areas/HighlightArea/HighlightArea';
import FeedArea from './Areas/FeedArea/FeedArea';
import './Home.css';

const Feed = () => {
  return (
    <Container>
      <div className='insta-app'>
        <div>
          <FeedArea className='feed-area' />
        </div>
        <div>
          <HighlightArea className='highlight-area' />
        </div>
      </div>
    </Container>
  );
};

export default Feed;
