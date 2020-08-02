import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const HighlightArea = () => {
  return (
    <InstagramEmbed
      url='https://www.instagram.com/p/B7ouFQHA-C0/'
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  );
};

export default HighlightArea;
