import { Reducer } from 'redux';
import { TodoAction, TodoActionType as Type } from './action';

export type Todo = {
        task: string,
        id?: number
}

export type TodoState = {
    todos: Todo[];
}

export const initialState: TodoState = {todos:[{task:"sa",id:0}]};

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
                ]
            }
        default:{
            const _: never = action.type
            return state
        }
    }
};

