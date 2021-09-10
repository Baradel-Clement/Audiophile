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
          <NavLink to="/" exact>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="NavBar-links">
          <NavLink
            onClick={() => {
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            to="/"
            exact
          ><li className="NavBar-link Nav-link">HOME</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            to="/headphones"
            exact
          ><li className="NavBar-link Nav-link">HEADPHONES</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            to="/speakers"
            exact
          ><li className="NavBar-link Nav-link">SPEAKERS</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setDisplayCart(false);
              setDisplayMask(false, '');
            }}
            to="/earphones"
            exact
          ><li className="NavBar-link Nav-link">EARPHONES</li>
          </NavLink>
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
                <NavLink to="/headphones" exact><button
                  onClick={() => {
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  type="button"
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </button>
                </NavLink>
              </div>
              <div className="Menu-category">
                <img src={speakersCategoryIcon} alt="speakersCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">SPEAKERS</p>
                <NavLink to="/speakers" exact><button
                  onClick={() => {
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  type="button"
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </button>
                </NavLink>
              </div>
              <div className="Menu-category">
                <img src={earphonesCategoryIcon} alt="earphonesCategoryIcon" />
                <span className="Menu-category-shadow" />
                <p className="Menu-category-title">EARPHONES</p>
                <NavLink to="/earphones" exact><button
                  onClick={() => {
                    setDisplayMenu(false);
                    setDisplayMask(false);
                  }}
                  className="button button3"
                  type="button"
                >SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} />
                </button>
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
