import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/AudiophileAssets/shared/desktop/logo.svg';
import { topFunction } from '../../utils';

const Footer = () => (
  <div className="Footer">
    <div className="Footer-wrap">
      <span className="orangeRectangle" />
      <div className="Footer-logo">
        <NavLink onClick={() => topFunction()} to="/" exact>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul className="Footer-nav">
        <NavLink onClick={() => topFunction()} to="/" exact><li className="Footer-link Nav-link">HOME</li></NavLink>
        <NavLink onClick={() => topFunction()} to="/headphones" exact><li className="Footer-link Nav-link">HEADPHONES</li></NavLink>
        <NavLink onClick={() => topFunction()} to="/speakers" exact><li className="Footer-link Nav-link">SPEAKERS</li></NavLink>
        <NavLink onClick={() => topFunction()} to="/earphones" exact><li className="Footer-link Nav-link">EARPHONES</li></NavLink>
      </ul>
      <div className="Footer-text">
        <p>Audiophile is an all in one stop to fulfill your audio needs.
          We're a small team of music lovers and sound specialists who are devoted
          to helping you get
          the most out of personal audio. Come and visit our demo facility -
          we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div className="Footer-social">
        <span className="Footer-social-icon Footer-social-facebook" />
        <span className="Footer-social-icon Footer-social-twitter" />
        <span className="Footer-social-icon Footer-social-insta" />
      </div>
    </div>
  </div>
);

export default Footer;
