import React, { useEffect } from 'react';
import AddTodo from './AddTodo';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { populateData } from '../features/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  // fetch tasks from redux store
  const tasks = useSelector((store) => store.todos);

  const todoData = JSON.parse(localStorage.getItem('tasks'));

  // to add the tasks from localstorage to redux store
  useEffect(() => {
    todoData !== null && dispatch(populateData(todoData));
  }, []);

  // const loadTasksFromLocalStorage = () => {
  //   const tasks = localStorage.getItem('tasks');
  //   return tasks ? JSON.parse(tasks) : [];
  // };

  return (
    <div className='w-1/2 mx-auto flex flex-col gap-4 items-center bg-[#161622] p-10 py-20   '>
      <h1 className='text-center '>Todo Application</h1>
      <AddTodo />
      {/* map  over the tasks array */}
      {tasks.map((tasks) => (
        <TaskItem tasks={tasks} />
      ))}
    </div>
  );
};

export default TaskList;
