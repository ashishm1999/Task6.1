import './App.css';
import React from 'react';
import NewPost from './NewPost';
import PostType from './PostType';
import Header  from './Header';

function PostPage(){
  return (
    <div className="PostPage">
      <Header />
      <NewPost />
      <PostType />
    </div>
  );
}

export default PostPage;
