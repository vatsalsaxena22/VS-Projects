import React, { useState } from 'react'
import Calculator from "../../assets/project images/Calculator App.png"
import Sps from "../../assets/project images/spsgame.png"
import Metro from '../../assets/project images/Metro Ticket.png';
import Flipkart from "../../assets/project images/Flipkart.png"
import Voting from "../../assets/project images/Voting Machine.png"

const JsCard = () => {

    let [arr, setArr] = useState([
        {
            name: "Calculator Web App",
            image: Calculator,
            url: "/Calculator Web/index.html",
        },
        {
            name: "Stone Paper Scissors",
            image: Sps,
            url: "https://firstschool.netlify.app/spsgame",
        },
        {
            name: "Metro Ticket System",
            image: Metro,
            url: "/Metro Ticket System/index.html",
        },
        {
            name: "Flipkart Cart System",
            image: Flipkart,
            url: "/Flipkart Clone/index.html",
        },
        {
            name: "Voting Machine",
            image: Voting,
            url: "/Voting Machine/index.html",
        },
    ])

  return (
    <>
    {
        arr.map((item, index) =>{
            return(
                <div key={index} className="card">
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

export default JsCard