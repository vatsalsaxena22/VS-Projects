import React from 'react'
import MERNCard from './MERNCard'

const MERN = () => {
  return (
    <div>
      <h1 className="display-4 text-center p-5 mern">MERN Stack Projects</h1>
      <div className="flex p-5">
        <MERNCard />
      </div>
    </div>
  )
}

export default MERN