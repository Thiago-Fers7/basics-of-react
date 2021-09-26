import React from 'react';

import { Container } from './styles';

export default function Header({ onToggleTheme, theme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        onClick={onToggleTheme}
        type="button"
      >
        {theme === 'dark' ? '🌞' :  '🌚'}
      </button>
    </Container>
  );
}