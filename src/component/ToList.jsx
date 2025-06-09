import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editPage } from '../Redux/todoSlice';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

const ToList = () => {
  const todoArr = useSelector((state) => state.todo.todoArr);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditPage = (item) => {
    dispatch(editPage(item));
  };

  return (
    <>
      <div className='w-[100%]'>
        <ul className='flex flex-col gap-2 w-[100%]'>
          {todoArr.length === 0 ? (
            <li className='text-center text-gray-700 py-4'>No tasks added yet.</li>
          ) : (
            todoArr.map((item) => (
              <li
                key={item.id}
                className='bg-white py-2 px-3 w-full border-[0.1px] border-gray-400 shadow rounded-md flex justify-between items-center text-gray-800'
              >
                <span className='flex-grow pr-2 break-words'>{item.text}</span>
                <div className='flex gap-2.5 ml-6'>
                  <button
                    onClick={() => handleEditPage(item)}
                    className='hover:scale-110 transition-transform duration-200'
                    title="Edit task"
                  >
                    <CiEdit className='text-blue-600 text-xl' />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className='hover:scale-110 transition-transform duration-200'
                    title="Delete task"
                  >
                    <RiDeleteBin6Fill className='text-red-500 text-xl' />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default ToList;