import React from 'react';
import { StyledApp } from './styles';
import { Header } from './components/Header/template';
import { Navigation } from './components/Navigation/template';
import { Footer } from './components/Footer/template';
import { Router } from '@reach/router';
import { HomePage } from './pages/Home/template'
import { FormPage } from './pages/Form/template'
import { AboutPage } from './pages/About/template'

export const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Navigation />
      <Router>
        <HomePage path="/" />
        <FormPage path="/form" />
        <AboutPage path="/about" />
      </Router>
      <Footer />
    </StyledApp>
  );
}