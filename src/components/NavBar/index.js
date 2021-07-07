import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/AudiophileAssets/shared/desktop/logo.svg';
import iconCart from '../../assets/AudiophileAssets/shared/desktop/icon-cart.svg';
import iconBurger from '../../assets/AudiophileAssets/shared/tablet/icon-hamburger.svg';
import headphonesCategoryIcon from '../../assets/AudiophileAssets/category-headphones/mobile/image-removebg-preview(41).png';
import speakersCategoryIcon from '../../assets/AudiophileAssets/category-speakers/mobile/image-removebg-preview(38).png';
import earphonesCategoryIcon from '../../assets/AudiophileAssets/category-earphones/mobile/image-removebg-preview(42).png';
import rightArrow from '../../assets/AudiophileAssets/shared/desktop/icon-arrow-right.svg';
import Cart from '../../containers/Cart';

const NavBar = ({ setDisplayCart, displayCart, totalProductInCart }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-wrap">
          <img onClick={() => setDisplayMenu(!displayMenu)} src={iconBurger} alt="burger" className="iconBurger" />
          <div className="NavBar-logo">
            <NavLink to="/" exact>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="NavBar-links">
            <NavLink to="/" exact><li className="NavBar-link Nav-link">HOME</li></NavLink>
            <NavLink to="/headphones" exact><li className="NavBar-link Nav-link">HEADPHONES</li></NavLink>
            <NavLink to="/speakers" exact><li className="NavBar-link Nav-link">SPEAKERS</li></NavLink>
            <NavLink to="/earphones" exact><li className="NavBar-link Nav-link">EARPHONES</li></NavLink>
          </ul>
          <div className="NavBar-cart">
            {
              totalProductInCart !== 0 && (
                <span className="NavBar-cart-totalProduct">{totalProductInCart}</span>
              )
            }
            <img onClick={() => setDisplayCart(!displayCart)} src={iconCart} alt="cart" />
          </div>
          { displayCart && (<Cart />) }
        </div>
      </div>
      {
          displayMenu && (
          <div className="Menu">
            <div className="Menu-categories">
              <div className="Menu-category">
                <img src={headphonesCategoryIcon} alt="headphonesCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">HEADPHONES</p>
                <button className="button button3" type="button"><NavLink onClick={() => setDisplayMenu(false)} to="/headphones" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
              </div>
              <div className="Menu-category">
                <img src={speakersCategoryIcon} alt="speakersCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">SPEAKERS</p>
                <button className="button button3" type="button"><NavLink onClick={() => setDisplayMenu(false)} to="/speakers" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
              </div>
              <div className="Menu-category">
                <img src={earphonesCategoryIcon} alt="earphonesCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">EARPHONES</p>
                <button className="button button3" type="button"><NavLink onClick={() => setDisplayMenu(false)} to="/earphones" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
              </div>
            </div>
          </div>
          )
      }
    </>
  );
};

NavBar.propTypes = {
  setDisplayCart: PropTypes.func.isRequired,
  displayCart: PropTypes.bool.isRequired,
  totalProductInCart: PropTypes.number.isRequired,
};

export default NavBar;
