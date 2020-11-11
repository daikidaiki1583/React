import React ,{ FC , useState} from 'react';
import { useForm } from 'react-hook-form';

export type Todo = {
    text: string;
    id: number;
};

const TodoList: FC = () => {
    const [todos,setTodo] = useState<Todo[]>([]);
    const [currentId,setId] = useState(todos.length + 1);
    const {register,handleSubmit,reset } = useForm<Todo>();   

    const onSubmit = (data: Todo): void => {
        setId(num => num + 1)
        const {text} = data;
        setTodo([...todos,{text:text,id:currentId}])
        reset()
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="text" ref={register} />
                <input type="submit"/>
            </form>
            <ul>
                {todos.map((t) => 
                    <li key={t.id}>
                        {t.text}
                    </li>
                )}

            </ul>
        </>
    )
}

export default TodoList;