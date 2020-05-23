import React, { Suspense } from 'react';
import { PageContainer, StyledApp } from './styles';
import { Header } from './components/Header/template';
import { Footer } from './components/Footer/template';
import { Localization } from './components/Localization/template';
import { Router } from '@reach/router';
import { HomePage } from './pages/public/Home/template'
import { FormPage } from './pages/public/Submission/template'
import { AboutPage } from './pages/public/About/template'
import { GlossaryPage } from './pages/public/Glossary/template'
import { ItemDetailPage } from './pages/public/DetailPage/template';
import { ReviewPage } from './pages/restricted/Review/template'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components/Loader/template'
import { NetworkErrorBoundary } from 'rest-hooks';
import { Grommet } from 'grommet';

const languages = {
  en: "en",
  de: "de",
  fr: "fr"
};

const LanguageContext = React.createContext(languages.en);

export const App: React.FC = () => {
  return (
    <Grommet plain>
        <Suspense fallback={<Loader />}>
          <NetworkErrorBoundary>
            <LanguageContext.Provider value={languages.en}>
              <StyledApp>
                <ToastContainer />
                <Header />
                <PageContainer>
                  <Router>
                    {/** PUBLIC ROUTES */}
                    <HomePage path="/" />
                    <ItemDetailPage path="/vent/:id" />
                    <FormPage path="/form" />
                    <GlossaryPage path="/glossary" />
                    <AboutPage path="/about" />
                    <ItemDetailPage path="detail/:id" />
                    {/** RESTRICTED ROUTES */}
                    <ReviewPage path="/review" />
                  </Router>
                </PageContainer>
                <Footer />
                <Localization />
              </StyledApp>
            </LanguageContext.Provider>
          </NetworkErrorBoundary>
        </Suspense>
    </Grommet>
  );
}
