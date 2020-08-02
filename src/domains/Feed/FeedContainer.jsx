import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase-config';

const FeedContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return children({ posts });
};

export default FeedContainer;
