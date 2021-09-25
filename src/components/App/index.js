import React, { useState } from 'react';

import { Post } from '../Post'
import { Header } from '../Header'

import { ThemeProvider } from '../../contexts/ThemeContext'

import { Title } from './styles'

function App() {

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#1',
      subtitle: 'subtitle#1',
      likes: 50,
      read: false,
      removed: true
    },
    {
      id: Math.random(),
      title: 'Title#2',
      subtitle: 'subtitle#2',
      likes: 50,
      read: true,
      removed: false
    },
    {
      id: Math.random(),
      title: 'Title#3',
      subtitle: 'subtitle#3',
      likes: 50,
      read: false,
      removed: false
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
    setPosts(prevState => prevState.map(
      post => post.id === postId ? { ...post, removed: true } : post
    ))
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">Posts da semana</Title>

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