import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTask } from '../features/tasksSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [Task, setTask] = useState('');
  const unique_id = uuid();

  //function to add task
  const HandleAdd = () => {
    dispatch(addTask({ name: Task, id: unique_id }));
    setTask('');
  };

  return (
    <div className='text-center border border-[#805DEF] rounded-md'>
      <input
        type='text'
        className='p-2 outline-none bg-inherit'
        value={Task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='p-2 bg-[#805DEF]' onClick={HandleAdd}>
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
