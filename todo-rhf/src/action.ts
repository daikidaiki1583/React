export const TodoActionType = {
    ADD:`ADD`
} as const;

type ValueOf<T> = T[keyof T];

export type TodoAction ={
    type: ValueOf<typeof TodoActionType>;
    payload:{
        text: string;
        // id: number;
    }
}

export const add = (text: string): TodoAction => ({
    type: TodoActionType.ADD,
    payload:{
        text: text,
        // id:id
    }
})