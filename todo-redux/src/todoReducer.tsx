import React from 'react';
import { Reducer } from 'redux';
import { TodoAction,TodoActionType as Type} from './action';

export type Todo = {
    text: string;
    done: boolean;    
} 

export type TodoState = {
    todo: Todo[];
}

export const initialState: TodoState = {todo:[]};

export const todoReducer: Reducer<TodoState,TodoAction> = (
    state: TodoState = initialState,
    action: TodoAction,
): TodoState => {  
    switch (action.type) {
        case Type.ADD:
            return {
                ...state
            }
        case Type.DONE:
            return {
                ...state
            }
        default: {
            const _: never = action.type;
            console.log(_);
            return state;
        }            
    }
}
