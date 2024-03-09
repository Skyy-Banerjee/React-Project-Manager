import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

function NewProject({ onAdd, onCancel }) {

    const modalRef = useRef();
    const titleRef = useRef();
    const descRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        // validation..
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            //show err. modal
            modalRef.current.open();
            return;

        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    return (
        <>
            <Modal ref={modalRef} btnCaption="Close">
                <h2 className='text-stone-700 text-xl font-bold mt-4 my-4'>Invalid input!</h2>
                <p className='text-stone-600 mb-4'>Oops! Looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field..</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button
                        className='text-stone-800 hover:text-stone-950'
                        onClick={onCancel}>
                        Cancel
                    </button>
                    </li>
                    <li><button
                        className='py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                        onClick={handleSave}>
                        Save
                    </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input ref={descRef} label="Descripton" textarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    )
}

export default NewProject
