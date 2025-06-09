import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSave } from 'react-icons/io';
import { IoIosRemoveCircle } from 'react-icons/io';
import { updateTodo, cancelEdit } from '../Redux/todoSlice';

const UpdateInput = () => {
    const dispatch = useDispatch();
    const editingTaskText = useSelector((state) => state.todo.editingTaskText);
    const editingTaskId = useSelector((state) => state.todo.editingTaskId);
    const [currentText, setCurrentText] = useState(editingTaskText);

    useEffect(() => {
        setCurrentText(editingTaskText);
    }, [editingTaskText]);

    const handleTextUpdate = (e) => {
        setCurrentText(e.target.value);
    };

    const handleSave = () => {
        if (currentText.trim() !== '' && editingTaskId) {
            dispatch(updateTodo({ id: editingTaskId, newText: currentText.trim() }));
        } else {
            console.warn("Task text cannot be empty.");
        }
    };

    const handleDiscard = () => {
        dispatch(cancelEdit());
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
            <div className='bg-white p-6 rounded-lg shadow-2xl flex flex-col gap-4 w-full max-w-sm'>
                <h3 className='text-lg font-semibold text-gray-800'>Edit Task</h3>
                <textarea
                    type='text'
                    value={currentText}
                    onChange={handleTextUpdate}
                    className='w-full h-24 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800'
                    placeholder='Edit your task here...'
                />
                <div className='flex gap-4 justify-end mt-2'>
                    <button
                        onClick={handleDiscard}
                        className='flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 shadow-md font-semibold'
                    >
                        <IoIosRemoveCircle className='text-xl mr-1' /> Discard
                    </button>
                    <button
                        onClick={handleSave}
                        className='flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md font-semibold'
                    >
                        <IoIosSave className='text-xl mr-1' /> Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInput;
