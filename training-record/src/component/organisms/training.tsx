import React , { FC ,useState} from 'react';
import RecordItem from '../molecule/recordItem';
import { useForm } from 'react-hook-form';
import { Table } from 'semantic-ui-react';
import './training.scss';  

export type TrainingType = {
    trainingName: string,
    id: number,
}

type Props = {
    today: string,
    training: TrainingType,
    deleteTraining: (training: TrainingType) => void;
}

export type Record = {
    date: string,
    count: number
    id: number
}

const Training: FC<Props> = ({training,today,deleteTraining}) => {
    const [records, setRecord]  = useState<Record[]>([]);
    const [id,setId] = useState<number>(records.length + 1)
    const { register,handleSubmit,reset,errors } = useForm<Record>();

    const onSubmit = (data: Record) => {            
        const {date,count} = data;
        setRecord([
            ...records,
            {
                date:date,
                count:count,
                id:id
            }
        ])
        setId((id) => id + 1 )
        reset();
    }

    const deleteRecord = (record: Record) => {
        setRecord((prev) => prev.filter((r) => r.id !== record.id))   
    }

    return(
        <>
            <div className='training-item'>
                <h1>{training.trainingName}</h1>
                <button className='delete-training' onClick={() => deleteTraining(training)}>削除</button>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name='date' type="date" defaultValue={today} ref={register({required: true})}/>
                    <input name='count' type="number" ref={register({required: true})}/>
                    <input type="submit"/>
                    {errors.count && <div className='error'>数字を入力してください</div>}

                </form>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className='date'>日付</Table.HeaderCell>
                            <Table.HeaderCell className='count'>回数</Table.HeaderCell>
                            <Table.HeaderCell className='menu'></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                {
                    records.map((record) => (
                        <RecordItem
                            key={record.id}
                            record={record}
                            deleteRecord={deleteRecord}
                        />
                    ))                        
                }
                    </Table.Body>
                </Table>
            </div>
        </>   
    )
}

export default Training;