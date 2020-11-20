import React , { FC , useState} from 'react';
import TrainingList from '../organisms/trainingList';
import { useForm } from 'react-hook-form';
import './kindOfTraining.scss';

type Inputs = {
    trainingName: string,
}

type trainingList = {
    trainingName: string,

}

const KindOfTraining: FC = () => {
    const { register , handleSubmit , reset} = useForm<Inputs>();   
    const [ trainingList, setList ] = useState<trainingList[]>([]);

    const onSubmit = (data: Inputs) => {
        const {trainingName} = data;
        
        if (trainingList.some((name) => name.trainingName === trainingName )) { 
            alert("そのトレーニングは既に登録されています。") 
            reset()
            return
        }

        setList([
            ...trainingList,
            {trainingName:trainingName}   
        ]);

        reset();
    }

    return (
        <div className='container'>
                <form className='input-form' onSubmit={handleSubmit(onSubmit)}>
                    <input name='trainingName' ref={register} placeholder='training name'/>
                    <input type='submit'/>
                </form>
            
            <div className='main'>
                {
                    trainingList.map((list) => {
                        return(
                                <TrainingList
                                    trainingName={list.trainingName}
                                    key={list.trainingName}
                                />
                        )
                    })
                }            
            
            </div>
 
        </div>
    )
}

export default KindOfTraining;