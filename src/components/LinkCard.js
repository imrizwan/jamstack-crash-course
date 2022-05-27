import React from 'react'

function LinkCard({ link, refreshLinks }) {

    const archiveLink = async (link) => {
        link.archived = true;
        try {
            await fetch('/api/updateLink', {
                method: "PUT",
                body: JSON.stringify(link)
            });
            refreshLinks();
        } catch (err) {
            console.log(err);
        }
    }

    const deleteLink = async (id) => {
        link.archived = true;
        try {
            await fetch('/api/deleteLink', {
                method: "DELETE",
                body: JSON.stringify({ id })
            })
            refreshLinks();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='card'>
            <div className='card-header'>
                {link.name}
            </div>
            <div className='card-body'>
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
            </div>
            <div className='card-footer'>
                <button className='btn btn-warning mr-2' onClick={() => archiveLink(link)} >Archive</button>
                <button className='btn btn-danger ml-2' onClick={() => deleteLink(link._id)}>Delete</button>
            </div>
        </div>
    )
}

export default LinkCard