import React from 'react';

export const Header = () => {

  return (
    <div className="conteiner_header">
      <div className="content">
        <div className="logo">
          <img src='./img/Path.png' alt="logo"/>
          <p>cloud<span>show</span></p>
        </div>
        <div className="menu">
          <ul>
            <li>Features</li>
            <li>How it Works</li>
            <li>Devices &amp; Dpwnloads</li>
            <li>Apps &amp; Content</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="button_block">
          <button className="login">Login</button>
          <button className="free">Free Trial</button>
        </div>
      </div>
    </div>
  )
}