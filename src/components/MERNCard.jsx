import React, { useState } from 'react'
import img from "../../assets/images/logo.jpg"

const MERNCard = () => {

    let [arr, setArr] = useState([
        {
            name: "Coming Soon....",
            image: img,
            url: "/",
        },
    ])

  return (
    <>
    {
        arr.map(item =>{
            return(
                <div className="card">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.name}
                />
                <div className="card-body">
                  <p className="card-text">{item.name}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Open Project
                  </a>
                </div>
              </div> 
            )
        })
    }
    </>
  )
}

export default MERNCard