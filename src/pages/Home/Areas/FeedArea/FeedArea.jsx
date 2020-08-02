import React from 'react';
import FeedContainer from '../../../../domains/Feed/FeedContainer';
import Post from '../../../../components/Post';

const FeedArea = () => {
  return (
    <FeedContainer>
      {({ posts }) =>
        posts.length > 0
          ? posts.map((post) => <Post id={post.id} {...post.post} />)
          : null
      }
    </FeedContainer>
  );
};

export default FeedArea;
