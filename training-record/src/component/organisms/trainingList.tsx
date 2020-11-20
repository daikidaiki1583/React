import React , { FC } from 'react';
import RecordItem from '../molecule/recordItem';
import './trainingList.scss';  

type Props = {
    trainingName: string,
}

const TrainingList: FC<Props> = ({trainingName}) => {
    return(
        <div className='training-item' color="yellow" key={trainingName}>
            <h1>{trainingName}</h1>
            <RecordItem/>
        </div>   
    )
}

export default TrainingList;