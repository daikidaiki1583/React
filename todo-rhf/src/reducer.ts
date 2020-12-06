import {Reducer} from 'redux';
import { TodoAction,TodoActionType } from './action'
import {Todo} from './todolist';

export type TodoState = {
    todos: Todo[]
}

export const initialState: TodoState = {todos:[]} 

export const todoReducer: Reducer<TodoState,TodoAction> = (
    state: TodoState = initialState,
    action: TodoAction
): TodoState => {
    switch (action.type) {
        case TodoActionType.ADD:
            return {...state,todos:[...state.todos]}
        default: {
            const check: never = action.type
            return check
        }
            
    }
}

