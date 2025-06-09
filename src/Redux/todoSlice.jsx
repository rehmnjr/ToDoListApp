
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoArr: [],
    editingTaskId: null,
    editingTaskText: '',
    isEditing: false,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
           
            const newTodo = {
                id: Date.now().toString(),
                text: action.payload,
            };
            state.todoArr.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todoArr = state.todoArr.filter((item) => item.id !== action.payload);
        },
        editPage: (state, action) => {
            state.editingTaskId = action.payload.id;
            state.editingTaskText = action.payload.text;
            state.isEditing = true;
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const existingTodo = state.todoArr.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = newText;
            }
            state.isEditing = false;
            state.editingTaskId = null;
            state.editingTaskText = '';
        },
        cancelEdit: (state) => {
            state.isEditing = false;
            state.editingTaskId = null;
            state.editingTaskText = '';
        }
    },
});

export const { addTodo, deleteTodo, editPage, updateTodo, cancelEdit } = todoSlice.actions;
export default todoSlice.reducer;