import React from 'react';

import { Post } from './Post'
import { Header } from './Header'

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <Post
        likes={20}
        post={{ title: 'Título da notícia', subtitle: 'Subtítulo da notícia' }}
      />

      <Post
        likes={11}
        post={{ title: 'Título da notícia', subtitle: 'Subtítulo da notícia' }}
      />
    </>
  );
}

export { App };