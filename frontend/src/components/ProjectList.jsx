import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectList = () => {
  return (
    <div className='h-88vh] overflow-x-auto flex justify-start items-start scrollbar-hide w-full'>
      <div className="grid grid-cols-2 gap-2 mt-5 w-full">
        {
          [1, 2, 3, 4, 5, 6].map((img, index) => {
            return (
              <Link key={`project-${index}`} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                <img className='w-full h-full object-fill' src="/canva.png" alt={`image-alt-${index}`} />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
