export const TodoActionType = {
    ADD:'ADD',
    DONE:'DONE'
} as const;

type ValueOf<T> = T[keyof T];

export type TodoAction = {
    type: ValueOf<typeof TodoActionType>;
    text?: string;
}

export const add = (text: string): TodoAction => ({
    type: TodoActionType.ADD,
    text
})

export const done = (): TodoAction => ({
    type: TodoActionType.DONE
})