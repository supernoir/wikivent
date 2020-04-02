import React from 'react';
import { StyledApp } from './styles';
import { Header } from './components/Header/template';
import { Footer } from './components/Footer/template';
import { Router } from '@reach/router';
import { HomePage } from './pages/public/Home/template'
import { FormPage } from './pages/public/Submission/template'
import { AboutPage } from './pages/public/About/template'
import { GlossaryPage } from './pages/public/Glossary/template'
import { ItemDetailPage } from './pages/public/DetailPage/template';
import { ReviewPage } from './pages/restricted/Review/template'

export const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Router>
        {/** PUBLIC ROUTES */}
        <HomePage path="/" />
        <ItemDetailPage path="/vent/:id" />
        <FormPage path="/form" />
        <GlossaryPage path="/glossary" />
        <AboutPage path="/about" />
        {/** RESTRICTED ROUTES */}
        <ReviewPage path="/review" />
      </Router>
      <Footer />
    </StyledApp>
  );
}