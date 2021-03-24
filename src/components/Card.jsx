import React from 'react';

export const Card = (prop) => {


  return (
    <div className="card">
      <div className="title_card">
        <div className="img_conteiner">
          <img src={prop.img} alt=' '/>
        </div>
        <p>{prop.title}</p>
      </div>
      <div className="text">
        <p>{prop.description}</p>
      </div>
    </div>
  )
}