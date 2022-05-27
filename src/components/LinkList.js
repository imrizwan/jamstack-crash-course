import React from 'react'
import LinkCard from "./LinkCard"

function LinkList({ links, loadLinks }) {
  return (
    <div>
      <h1 className='text-center mb-5'>Active Links: </h1>
      {links && links.filter(link => !link.archived).map(link => (<div>
        <LinkCard key={link._id} link={link} refreshLinks={loadLinks} />
      </div>))}

      <h1 className='text-center mb-5'>Archive Links: </h1>
      {links && links.filter(link => link.archived).map(link => (<div>
        <LinkCard key={link._id} link={link} refreshLinks={loadLinks} />
      </div>))}
    </div>
  )
}

export default LinkList