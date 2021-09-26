import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, theme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} theme={theme} />
    </>
  );
}
