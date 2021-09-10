import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import headphonesCategoryIconDesktop from '../../assets/AudiophileAssets/categories/desktop/headphones.png';
import speakersCategoryIconDesktop from '../../assets/AudiophileAssets/categories/desktop/speakers.png';
import earphonesCategoryIconDesktop from '../../assets/AudiophileAssets/categories/desktop/earphones.png';
import headphonesCategoryIconMobile from '../../assets/AudiophileAssets/categories/mobile-tablet/headphones.png';
import speakersCategoryIconMobile from '../../assets/AudiophileAssets/categories/mobile-tablet/speakers.png';
import earphonesCategoryIconMobile from '../../assets/AudiophileAssets/categories/mobile-tablet/earphones.png';

import rightArrow from '../../assets/AudiophileAssets/shared/desktop/icon-arrow-right.svg';

const Categories = ({ id }) => (
  <div className="Categories" id={id}>
    <div className="Categories-category">
      <img src={headphonesCategoryIconDesktop} alt="headphonesCategoryIconDesktop" />
      <img src={headphonesCategoryIconMobile} alt="headphonesCategoryIconMobile" />
      <span className="Categories-category-shadow" />
      <p className="Categories-category-title">HEADPHONES</p>
      <NavLink to="/headphones" exact><button className="button button3" type="button">SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} /></button></NavLink>
    </div>
    <div className="Categories-category">
      <img src={speakersCategoryIconDesktop} alt="speakersCategoryIconDesktop" />
      <img src={speakersCategoryIconMobile} alt="speakersCategoryIconMobile" />
      <span className="Categories-category-shadow" />
      <p className="Categories-category-title">SPEAKERS</p>
      <NavLink to="/speakers" exact><button className="button button3" type="button">SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} /></button></NavLink>
    </div>
    <div className="Categories-category">
      <img src={earphonesCategoryIconDesktop} alt="earphonesCategoryIconDesktop" />
      <img src={earphonesCategoryIconMobile} alt="earphonesCategoryIconMobile" />
      <span className="Categories-category-shadow" />
      <p className="Categories-category-title">EARPHONES</p>
      <NavLink to="/earphones" exact><button className="button button3" type="button">SHOP<span style={{ backgroundImage: `url(${rightArrow})` }} /></button></NavLink>
    </div>
  </div>
);

Categories.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Categories;
