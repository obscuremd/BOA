import React from 'react'

interface CardProps {
    image : string | React.ReactNode
    text : string
    prim_text ?: string
    onClick ?: ()=>void
}

const Card:React.FC<CardProps> = ({image, text, prim_text, onClick}) => {
  return (
    <div onClick={onClick} className="card bg-base-100 w-[45%] md:w-52 flex shadow-xl">
        <figure className="px-2 pt-2">
          {
            typeof image === 'string'
            ?<img
            src={image}
            alt="Shoes"
            className="rounded-xl w-16" />
            :image
          }
            
        </figure>
        <div className="card-body items-center text-center">
            <p className='text-lg font-extrabold'>{prim_text}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card