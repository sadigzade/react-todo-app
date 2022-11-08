import React from 'react';

import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

import classes from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="contianer">
      <PageTitle>TODO LIST</PageTitle>
      <div className={classes.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
