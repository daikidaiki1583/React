import { createSlice,PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
        task: string;
        id: number;
}

export type TodoState = {
    todos: Todo[];
}

export const initialState: TodoState = {todos:[{task:'',id:0}]};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add: (state,action: PayloadAction<string>) => ({
            todos:[
                ...state.todos,
            {
                task:action.payload,
                id:state.todos[state.todos.length -1].id + 1 
            }
            ]
        }),
        delete: (state,action: PayloadAction<number>) => ({
            todos:[...state.todos.filter((t) => t.id !== action.payload)]         
        }),
    }
});
