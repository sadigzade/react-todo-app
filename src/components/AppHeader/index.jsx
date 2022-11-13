import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import SortPopup from './SortPopup';
import TodoModal from '../TodoModal';

import { updateFilterStatus } from '../../redux/slices/todoSlice';

import classes from './AppHeader.module.scss';

const AppHeader = () => {
  const dispatch = useDispatch();
  const { filterStatus } = useSelector((state) => state.todo);

  const [modalOpen, setModalOpen] = useState(false);

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={classes.appHeader}>
      <Button variant="primary" onClickModal={() => setModalOpen(true)}>
        App Task
      </Button>
      <SortPopup id="status" filterStatus={filterStatus} updateFilter={updateFilter}>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SortPopup>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default AppHeader;
