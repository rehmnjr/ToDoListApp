import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';
import ToList from './ToList';
import '../index.css';

const InputCard = () => {
    const [val, setVal] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setVal(e.target.value);
    };

    const handleClick = () => {
        if (val.trim() !== '') {
            dispatch(addTodo(val.trim()));
            setVal('');
        }
    };

    return (
        <div className='p-5 mt-10 rounded-2xl flex flex-col gap-10 max-h-fit w-96 text-wrap items-center' style={{ backgroundColor: '#ffffff5a' }}>
            <div className='w-full flex justify-between'>
                <input
                    type="text"
                    placeholder='Enter your task'
                    value={val}
                    onChange={handleChange}
                    className='px-3 py-2 w-[70%] border rounded-[5px] text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    onClick={handleClick}
                    className='bg-green-600 px-6 py-2 rounded-[5px] ml-4 hover:bg-green-700 transition-colors duration-200 shadow-md text-white font-semibold'
                >
                    ADD
                </button>
            </div>
            <div className='w-[100%]'>
                <ToList />
            </div>
        </div>
    );
};

export default InputCard;
