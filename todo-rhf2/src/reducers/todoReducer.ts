import { Reducer } from 'redux';
import { TodoAction, TodoActionType as Type } from '../action';

export type Todo = {
        task: string,
        id: number
}

export type TodoState = {
    todos: Todo[];
    id: number
}

export const initialState: TodoState = {todos:[],id:0};

export const todoReducer: Reducer<TodoState,TodoAction> = (
    state: TodoState = initialState,
    action: TodoAction
): TodoState => {
    switch (action.type) {
        case Type.ADD:
            return {
                ...state,
              todos:[
                ...state.todos,
                {
                ...action.payload
                }
                ],
                id: state.id + 1
            }
        case Type.DELETE:
            // state.todos.filter((t) => t.id !== action.payload.id);
            // return state                
            return {
                todos:[
                    ...state.todos.filter((t) => t.id !== action.payload.id)
                ],
                id: state.id
            }
        default:{
            const _: never = action.type
            return state
        }
    }
};

