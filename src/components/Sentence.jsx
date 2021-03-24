import React from 'react';
import {CardSentence} from './CardSentence'


export const Sentence = () => {

  const card = [
    {
      id: '1',
      img: './img/Bitmap_background_1.png',
      color: '#05b247',
      title: 'Dashboards'
    },
    {
      id: '2',
      img: './img/Bitmap_background_2.png',
      color: '#f7c31f',
      title: 'Calendars'
    },
    {
      id: '3',
      img: './img/Artboard.png',
      color: '#db3a34',
      title: 'Weather'
    },
    {
      id: '4',
      img: './img/Bitmap_backgrounf_3.png',
      color: '#0460ba',
      title: 'Promotional'
    }
  ]
  
  return (
    <div className="sentence">
      <div className="content">
        <div className="title">
          <p>Digital Signage that grow your business</p>
          <p><span>Discover out unique features and learn more about them.</span></p>
        </div>
        <div className="card_list">
          {
            card.map((e) => (
              <CardSentence 
                key = {e.id}
                img = {e.img}
                color = {e.color}
                title = {e.title}
              />
            ))
          }
          
        </div>
      </div>
    </div>
  )
}