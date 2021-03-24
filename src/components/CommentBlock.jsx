import React from 'react';


export const CommentBlock = () => {
  

  return (
    <div className="conteiner_comment">
      <div className="content_comment">
        <div className="comment">
          <div className="logo">
            <img src="./img/Bitmap_4sysops.png" atr=" "/>
          </div>
          <div className="text">
            <p>I use CloudShow on a TV in my ice cream shop to show what flavors we’re currently scooping through a Google spreadsheet.
            <br/> <br/>I’ve worked up a system to turn each flavor on and off using an Android phone by scanning an NFC tag on the back of each specific flavor title card that sits in the ice cream display that then triggers the Tasker app to update the background color of the cell associated with that flavor using Google Sheets APIs and on/off state tracking and some limited error handling through Tasker itself.
            <br/> <br/>I also run a Google Slideshow overlaid on the spreadsheet using the picture-in-picture function to cycle in-store ads.</p>
          </div>
          <div className="appraisal">
            <p>Brandon H</p>
            <div className="star">
              <ul>
                <li><img src="./img/star.svg" alt="star"/></li>
                <li><img src="./img/star.svg" alt="star"/></li>
                <li><img src="./img/star.svg" alt="star"/></li>
                <li><img src="./img/star.svg" alt="star"/></li>
                <li><img src="./img/star.svg" alt="star"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}