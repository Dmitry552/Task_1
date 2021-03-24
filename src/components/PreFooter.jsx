import React from 'react';

export const PreFooter = () => {

  return (
    <div className="pre_footer">
      <div className="content">
        <div className="logo">
          <img src="./img/Path2.svg" alt="logo"/>
        </div>
        <div className="title">
          <p>Try CloudShow Today!</p>
          <p><span>
            Try CloudShow today, it's completely free for one device! 
            <br />Need more devices?
          </span></p>
        </div>
        <div className="button_block">
          <button className="demo">View Demo</button>
          <button className="account">Create Free Account</button>
        </div>
        <div className="try">
          <div className="note">
            <div className="img_block">
              <img src="./img/checkmark-circle-2.svg" alt="true"/>
            </div>
            <p>60-day Enterprise free trial</p>
          </div>
        </div>
      </div>
    </div>
  )
}