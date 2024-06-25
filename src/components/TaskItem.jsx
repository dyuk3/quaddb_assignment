import React, { useState } from 'react';
import { deleteTask, editTask } from '../features/tasksSlice';
import { useDispatch } from 'react-redux';

const TaskItem = ({ tasks }) => {
  // destructuring the task information
  const { name, completed, id } = tasks;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [newText, setNewText] = useState(name);
  const [checkbox, setCheckbox] = useState(completed);

  const updateStatus = () => {
    setCheckbox(!checkbox);
  };

  // function to edit the task
  const handleEdit = (id) => {
    dispatch(editTask({ id: id, name: newText }));
    setEditable(false);
  };

  //function to cancel the edit task
  const handleCancel = () => {
    setEditable(false);
    setNewText(name);
  };

  // funtion to delete the task
  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };
  return (
    <div className='flex justify-between items-center w-full mx-auto my-2 bg-blue-950 p-4 bg-opacity-50 rounded-md'>
      {/* conditionally render the editable or read only task info */}
      {editable ? (
        <div className='flex w-full justify-end gap-60 self-center '>
          <input
            type='text'
            className='bg-inherit border p-1'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className='flex gap-4'>
            <button className='bg-red-500 p-2' onClick={handleCancel}>
              Cancel
            </button>
            <button className='bg-green-500 p-2' onClick={() => handleEdit(tasks.id)}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <input type='checkbox' className='h-5 w-5' checked={checkbox} onChange={updateStatus} />
          <p className='font-medium text-xl'> {tasks.name} </p>
          <div className='flex gap-2'>
            <button className='bg-orange-500 px-4 p-2' onClick={() => setEditable(true)}>
              Edit
            </button>
            <button className='bg-red-500 px-4' onClick={() => handleDeleteTask()}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
