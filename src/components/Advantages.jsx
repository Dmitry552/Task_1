import React from 'react';
import {Card} from './Card';

export const Advantages = () => {

  const card = [
    {
      id: '1',
      img: './img/tools-settings.svg',
      title: 'Flexible & Easy to Setup',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    },
    {
      id: '2',
      img: './img/apps.svg',
      title: '60+ Apps and Counting',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    },
    {
      id: '3',
      img: './img/calendar-chedule-clock.svg',
      title: 'Scheduling',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    },
    {
      id: '4',
      img: './img/layers.svg',
      title: 'Templates',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    },
    {
      id: '5',
      img: './img/design-21.svg',
      title: 'Widgets',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    },
    {
      id: '6',
      img: './img/thunder-lightning-fast.svg',
      title: 'Realtime Sign Updates',
      description: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of'
    }
  ]

  return (
    <div className="advantages">
      <div className="content">
        <div className="title">
          <p>CloudShow Features</p>
          <p><span>Discover our unique features and learm mare about them.</span></p>
        </div>
        <div className="card-list">
          {
            card.map((e) => (
              <Card 
                key = {e.id}
                img={e.img}
                title={e.title}
                description={e.description}
              />
            ))
          }
        </div>
        <div className="footer_text">
          <p>View all features</p>
        </div>
      </div>
    </div>
  )
}