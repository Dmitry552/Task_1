import React from 'react';

export const Footer = () => {

  return (
    <div className="footer">
      <div className="content">
        <div className="footer-bottom">
          <div className="logo">
            <img src="./img/Path2.svg" alt="logo"/>
          </div>
          <div className="columns">
            <div className="column product">
              <p><span>Product</span></p>
              <ul>
                <li>Features</li>
                <li>How it Works</li>
                <li>Devices \uf00f Downloads</li>
                <li>Apps \uf00f Content</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="column others">
              <p><span>Others</span></p>
              <ul>
                <li>Support</li>
                <li>FAQ</li>
                <li>Status</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="column social">
              <p><span>Social Media</span></p>
              <ul>
                <li><img src="./img/facebook-circle-line.svg" alt="Facebook"/> Facebook</li>
                <li><img src="./img/linkedin-box-line.svg" alt="Linkedin"/>Linkedin</li>
                <li><img src="./img/instagram-line.svg" alt="Instagram"/>Instagram</li>
                <li><img src="./img/twitter-line.svg" alt="Twitter"/>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="button_block">
            <button className="login">Login</button>
            <button className="free">Free Trial</button>
          </div>
        </div>
        <div className="compani">
          <p>Copyright &copy; 2007-2020 Binary Fortress Software</p>
        </div>

      </div>
    </div>
  )
}