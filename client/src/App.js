import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.actions';

import Navigation from './routes/navigation/Navigation.route';
import Home from './routes/home/Home.route';
import Authentication from './routes/authentication/Authentication.route';
import Shop from './routes/shop/Shop.route';
import Checkout from './routes/checkout/Checkout.route';
import Dashboard from './routes/dashboard/Dashboard.route';

import Google from './routes/google/Google.route';
import GoogleRedirect from './routes/google/GoogleRedirect.route';

import { ReactComponent as ThemeDarkIcon } from './assets/theme-icon-dark.svg';
import { ReactComponent as ThemeLightIcon } from './assets/theme-icon-light.svg';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './resources/styles/GlobalStyle';
import { ThemeToggleButton } from './resources/styles/App.styles';

const App = () => {
  const dispatch = useDispatch();
  const savedTheme = localStorage.getItem('theme');
  const [currentTheme, setCurrentTheme] = useState('light');
  const isDarkTheme = currentTheme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setCurrentTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  // Use the prefers-color-scheme media query to detect OS theme preference
  useEffect(() => {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    } else if (prefersDark) {
      setCurrentTheme('dark');
    }
  }, [savedTheme]);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []); // eslint-disable-line

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <>
        <Routes>
          {/* Navigation bar */}
          <Route
            path="/"
            element={
              <>
                <Navigation>
                  <ThemeToggleButton onClick={toggleTheme}>
                    {isDarkTheme ? (
                      <ThemeLightIcon aria-label="light-mode" />
                    ) : (
                      <ThemeDarkIcon aria-label="dark-mode" />
                    )}
                  </ThemeToggleButton>
                </Navigation>
              </>
            }>
            {/* Routes */}

            {/* Authentication */}
            <Route path="auth" element={<Authentication />} />

            {/* Routes for Google Authentication */}
            {/* <Route path="api/auth/google" element={<Google />} /> */}
            <Route path="auth/google" element={<Google />} />
            <Route path="auth/google/redirect" element={<GoogleRedirect />} />

            {/* Homepage */}
            <Route index element={<Home />} />

            {/* Shop */}
            <Route path="shop/*" element={<Shop />} />

            {/* Checkout */}
            <Route path="checkout" element={<Checkout />} />

            {/* Dashboard */}
            <Route path="dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
