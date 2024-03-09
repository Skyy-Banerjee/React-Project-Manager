import React, { useState } from 'react'

function NewTask({ onAdd }) {

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(evt) {
        setEnteredTask(evt.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            alert('Please enter a task first!')
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }


    return (
        <div className='flex items-center gap-4'>
            <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask} onChange={handleChange} />
            <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default NewTask
