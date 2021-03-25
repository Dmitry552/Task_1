import React, {useState} from 'react';
import Burger from 'react-css-burger';


export const Header = () => {

  const [active, setActive] = useState(false);

  return (
    <div className="conteiner_header">
      <div className="content">
        <div className="logo">
          <img src='./img/Path.png' alt="logo"/>
          <p>cloud<span>show</span></p>
        </div>
        <div className="menu_list">
          <div className="burger">
            <Burger 
                onClick={() => setActive(!active)}
                active={active}
                color={'#0460ba'}
              />
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
          <div className={`menu_burger ${active ? '' : 'hide'}`}>
            <ul>
              <li>Features</li>
              <li>How it Works</li>
              <li>Devices &amp; Dpwnloads</li>
              <li>Apps &amp; Content</li>
              <li>Pricing</li>
            </ul>
          </div>
          {active ? 
            <div className="menu_burger">
              <ul>
                <li>Features</li>
                <li>How it Works</li>
                <li>Devices &amp; Dpwnloads</li>
                <li>Apps &amp; Content</li>
                <li>Pricing</li>
              </ul>
            </div>
          : ''
        }
        </div>
        
       
        <div className="button_block">
          <button className="button type_1">Login</button>
          <button className="button type_2">Free Trial</button>
        </div>
      </div>
    </div>
  )
}