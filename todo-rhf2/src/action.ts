export const TodoActionType = {
    ADD:'ADD',
    DELETE:'DELETE'
} as const;

type ValueOf<T> = T[keyof T];

export type TodoAction = {
    type: ValueOf<typeof TodoActionType>
    payload:{
        task: string
        id: number
    } 
}

export const add = (text: string,idNum: number): TodoAction => ({
    type: TodoActionType.ADD,
    payload:{
        task:text,
        id:idNum
    }
})  

export const deleteItem = (idNum: number) => ({
    type: TodoActionType.DELETE,
    payload:{id:idNum}
}) 