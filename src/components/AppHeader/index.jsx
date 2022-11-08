import React, { useState } from 'react';

import Button from '../Button';
import SortPopup from './SortPopup';

import classes from './AppHeader.module.scss';
import TodoModal from './TodoModal';

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.appHeader}>
      <Button variant="primary" onClickModal={() => setModalOpen(true)}>
        App Task
      </Button>
      <SortPopup id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SortPopup>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default AppHeader;
