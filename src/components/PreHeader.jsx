import React from 'react';
import {Link} from 'react-router-dom';

const menu = [
  {
    id: "1",
    img: "./img/BinaryFortressLight.svg",
    name: "Binary Fortress"
  },
  {  
    id: "2",
    img: "./img/DisplayFusion.svg",
    name: "DisplayFusion"
  },
  {  
    id: "3",
    img: "./img/CheckCentral.svg",
    name: "CheckCentral"
  },
  {  
    id: "4",
    img: "./img/ClipboardFusion.svg",
    name: "ClipboardFusion"
  },
  {  
    id: "5",
    img: "./img/FileSeek.svg",
    name: "FileSeek"
  },
  {  
    id: "6",
    img: "./img/VoiceBot.svg",
    name: "VoiceBot"
  },
  {  
    id: "7",
    img: "./img/WallpaperFusion.svg",
    name: "WallpaperFusion"
  }
]

export const PreHeader = () => {

  return (
    <div className="conteiner">
      <div className="menu_Nav">
        {menu.map(e => (
            <label key={e.id}>
              <Link to='/'>
                <div className="menu_element">
                  <img src={e.img} alt=" "/>
                  <p>{e.name}</p>
                </div>
              </Link>
            </label>
        ))}
      </div>
    </div>      
  )
}