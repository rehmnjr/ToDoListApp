import React from 'react';
import InputCard from './component/inputCard';
import UpdateInput from './component/UpdateInput'; 
import { useSelector } from 'react-redux'; 

const App = () => {
  const isEditing = useSelector((state) => state.todo.isEditing); // Get the isEditing state

  return (
    <div className='bg-gradient-to-bl from-pink-900 to-violet-800 h-screen w-screen flex justify-center items-start pt-10'>
      <InputCard />
      {/* Conditionally render the UpdateInput modal */}
      {isEditing && <UpdateInput />}
    </div>
  );
};

export default App;