import React, { useState } from 'react';

import { Post } from './Post'
import { Header } from './Header'

import { ThemeProvider } from './ThemeContext'

import './style.css'

function App() {

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#1',
      subtitle: 'subtitle#1',
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#2',
      subtitle: 'subtitle#2',
      likes: 50,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title#3',
      subtitle: 'subtitle#3',
      likes: 50,
      read: false,
    }
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `title#${posts.length + 1}`,
        subtitle: `subtitle#${posts.length + 1}`,
        likes: 50,
        read: false,
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts(prevState => prevState.filter(state => state.id !== postId))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>Posts da semana</h2>

        <button
          onClick={handleRefresh}
        >
          Atualizar
        </button>
      </Header>

      {posts.map(post => {
        return (
          <Post
            post={post}
            key={post.id}
            onRemove={handleRemovePost}
          />
        )
      })}
    </ThemeProvider>
  );
}

export { App };