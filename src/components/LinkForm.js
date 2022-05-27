import React, { useState } from 'react'

function LinkForm({ refreshLinks }) {

    const [name, setName] = useState('');
    const [url, setURL] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setURL('');
        setDescription('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description };

        try {
            await fetch('/.netlify/functions/createLink', {
                method: "POST",
                body: JSON.stringify(body)
            });
            resetForm();
            refreshLinks()
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='card'>
            <div className='card-header'>Add</div>
            <div className='card-body'>
                <form onSubmit={handleSubmit} >
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className='form-control'
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            name="url"
                            className='form-control'
                            id="url"
                            value={url}
                            onChange={(e) => setURL(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LinkForm