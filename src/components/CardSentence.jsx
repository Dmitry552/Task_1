import React, {useState} from 'react';


export const CardSentence = (prop) => {

  const [thickness, changeThickness] = useState('3px');
  
  return (
    <div className="CardSentence" 
      onMouseOver = {() => (changeThickness('5px'))}
      onMouseOut = {() => (changeThickness('3px'))}
      style={{boxShadow:`0 ${thickness} 0 0 ${prop.color}`}}>
      <div className="example" style={{backgroundImage: `url(${prop.img})`}}></div>
      <div className="title">
        <p>{prop.title}</p>
      </div>
    </div>
  )
}