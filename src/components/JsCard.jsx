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
            url: "https://vatsalsaxena22.github.io/myPortfolio/projects/Calculator%20Web/",
        },
        {
            name: "Stone Paper Scissors",
            image: Sps,
            url: "https://firstschool.netlify.app/spsgame",
        },
        {
            name: "Metro Ticket System",
            image: Metro,
            url: "https://vatsalsaxena22.github.io/myPortfolio/projects/Metro%20Ticket%20System/",
        },
        {
            name: "Flipkart Cart System",
            image: Flipkart,
            url: "https://vatsalsaxena22.github.io/myPortfolio/projects/Flipkart%20Clone/",
        },
        {
            name: "Voting Machine",
            image: Voting,
            url: "https://vatsalsaxena22.github.io/myPortfolio/projects/Voting%20Machine/",
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