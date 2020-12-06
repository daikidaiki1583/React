import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'todo';
export const add = createAction<string>(`${FEATURE}/add`);
export const deleteItem = createAction<number>(`${FEATURE}/delete`);

