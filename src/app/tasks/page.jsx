import { getTasks } from '@/lib/tasks';
import React from 'react';
import Task from '../component/Task';
import { AddTask } from '../component/AddTask';
import { createATask } from '../lib/actions';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Tasks = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h1 className='mb-5'>Task : {tasks.length}</h1>
            <AddTask createATask = {createATask}></AddTask>
            <Link href={"/tasks/new"}>
            <Button variant="secondary">Add A Task</Button>
            </Link>
            <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    tasks.map(task => <Task key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default Tasks;