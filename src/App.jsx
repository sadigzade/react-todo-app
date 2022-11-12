import React, { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

import classes from './styles/modules/app.module.scss';

function App() {
  return (
    <Fragment>
      <div className="contianer">
        <PageTitle>TODO LIST</PageTitle>
        <div className={classes.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </Fragment>
  );
}

export default App;
