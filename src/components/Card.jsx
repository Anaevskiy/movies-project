import React from "react"


function Card (props) {
    const {Title,Year,Poster} = props.item
    return (
        <div className="row">
        <div className="col s14 m12">
          <div className="card">
            <div className="card-image">
              <img src={Poster} alt="" height='400px'/>
              <span className="card-title">{Title}</span>
            </div>
            <div className="card-content">
              <p>{Year}</p>
            </div>
            <div className="card-action">
              <a href="#">Ссылка</a>
            </div>
          </div>
        </div>
      </div>
    )
}


export {Card}