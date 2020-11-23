import React , { FC , useState,useMemo} from 'react';
import Training from '../organisms/training';
import { TrainingType } from '../organisms/training';
import { useForm } from 'react-hook-form';
import { calculateToday } from '../today/today';
import './trainingList.scss';

const TrainingList: FC = () => {
    const { register , handleSubmit , reset} = useForm<TrainingType>();   
    const [ trainingList, setList ] = useState<TrainingType[]>([]);
    const [ id, setId ] = useState<number>(trainingList.length + 1);
    const today = useMemo(()=> calculateToday(),[]);

    const onSubmit = (data: TrainingType) => {
        const {trainingName} = data;
        if (!trainingName) {
            alert('トレーニング名を入力してください。') 
            return
        } else if (trainingList.some((name) => name.trainingName === trainingName )) { 
            alert("そのトレーニングは既に登録されています。") 
            reset()
            return
        }
        setList([
            ...trainingList,
            {
                trainingName:trainingName,
                id:id
            }   
        ]);
        setId((count) => count + 1 )

        reset();
    }

    const deleteTraining = (training: TrainingType) => {
        setList((prev) => prev.filter((list) => list.id !== training.id))   
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
                                <Training
                                    training={list}
                                    key={list.id}
                                    today={today}
                                    deleteTraining={deleteTraining}
                                />
                        )
                    })
                }           
            </div>
        </div>
    )
}

export default TrainingList;