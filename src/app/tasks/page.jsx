import { getTasks } from '@/lib/tasks';
import React from 'react';
import Task from '../component/Task';

const Tasks = async () => {
    const tasks = await getTasks()
    return (
        <div>
            <h1>Task : {tasks.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map(task => <Task key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default Tasks;