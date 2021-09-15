/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
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
import { topFunction } from '../../utils';

const NavBar = ({
  setDisplayCart,
  displayCart,
  totalProductInCart,
  setDisplayMask,
  displayMask,
  displayMenu,
  setDisplayMenu,
}) => (
  <>
    <div className="NavBar">
      <div className="NavBar-wrap">
        <img
          onClick={() => {
            setDisplayMask(!displayMask, 'triggeredFromCart');
            setDisplayMenu(!displayMenu);
            setDisplayCart(false);
          }}
          src={iconBurger}
          alt="burger"
          className="iconBurger"
        />
        <div
          onClick={() => {
            setDisplayMask(false, '');
            setDisplayCart(false);
            setDisplayMenu(false);
          }}
          className="NavBar-logo"
        >
          <NavLink onClick={() => topFunction()} to="/" exact>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="NavBar-links">
          <li
            onClick={() => {
              topFunction();
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            className="NavBar-link"
          >
            <NavLink
              className="Nav-link"
              to="/"
              exact
            >HOME</NavLink></li>
          <li
            onClick={() => {
              topFunction();
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            className="NavBar-link"
          >
            <NavLink
              className="Nav-link"
              to="/headphones"
              exact
            >HEADPHONES</NavLink></li>
          <li
            onClick={() => {
              topFunction();
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            className="NavBar-link"
          >
            <NavLink
              className="Nav-link"
              to="/speakers"
              exact
            >SPEAKERS</NavLink></li>
          <li
            onClick={() => {
              topFunction();
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            className="NavBar-link"
          >
            <NavLink
              className="Nav-link"
              to="/earphones"
              exact
            >EARPHONES</NavLink></li>
        </ul>
        <div className="NavBar-cart">
          {
              totalProductInCart !== 0 && (
                <span className="NavBar-cart-totalProduct">{totalProductInCart}</span>
              )
            }
          <img
            onClick={() => {
              setDisplayMenu(false);
              setDisplayMask(!displayMask, 'triggeredFromMenu');
              setDisplayCart(!displayCart);
            }}
            src={iconCart}
            alt="cart"
          />
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
                <NavLink
                  onClick={() => {
                    topFunction();
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  to="/headphones"
                  exact
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </NavLink>
              </div>
              <div className="Menu-category">
                <img src={speakersCategoryIcon} alt="speakersCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">SPEAKERS</p>
                <NavLink
                  onClick={() => {
                    topFunction();
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  to="/speakers"
                  exact
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </NavLink>
              </div>
              <div className="Menu-category">
                <img src={earphonesCategoryIcon} alt="earphonesCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">EARPHONES</p>
                <NavLink
                  onClick={() => {
                    topFunction();
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  to="/earphones"
                  exact
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </NavLink>
              </div>
            </div>
          </div>
          )
      }
  </>
);

NavBar.propTypes = {
  setDisplayCart: PropTypes.func.isRequired,
  displayCart: PropTypes.bool.isRequired,
  totalProductInCart: PropTypes.number.isRequired,
  setDisplayMask: PropTypes.func.isRequired,
  displayMask: PropTypes.bool.isRequired,
  displayMenu: PropTypes.bool.isRequired,
  setDisplayMenu: PropTypes.func.isRequired,
};

export default NavBar;
