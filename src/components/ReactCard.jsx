import React, { useState } from 'react'
import VSP from "../../assets/project images/VS Projects.png"
import WeatherApp from "../../assets/project images/Weather App.png"

const ReactCard = () => {

    let [arr, setArr] = useState([
        {
            name: "This Projects Website",
            image: VSP,
            url: "/",
        },
        {
            name: "Weather App",
            image: WeatherApp,
            url: "/Weather App/index.html",
        },
    ])

  return (
    <>
    {
        arr.map((item, index) =>{
            return(
                <div className="card" key={index}>
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

export default ReactCard