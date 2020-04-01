import React from 'react';
import { StyledApp } from './styles';
import { Header } from './components/Header/template';
import { Footer } from './components/Footer/template';
import { Router } from '@reach/router';
import { HomePage } from './pages/Home/template'
import { FormPage } from './pages/Form/template'
import { AboutPage } from './pages/About/template'
import { GlossaryPage } from './pages/Glossary/template'
import { ItemDetailPage } from './pages/DetailPage/template';

export const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Router>
        <HomePage path="/" />
        <ItemDetailPage path="/vent/:id" />
        <FormPage path="/form" />
        <GlossaryPage path="/glossary" />
        <AboutPage path="/about" />
      </Router>
      <Footer />
    </StyledApp>
  );
}