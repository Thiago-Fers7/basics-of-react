import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light');

  const firstRender = useRef(true) // useRef para manter o valor durante os renders

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    console.log('A partir do segundo render')

    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
