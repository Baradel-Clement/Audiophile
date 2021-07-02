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
      <button className="button button3" type="button"><NavLink to="/headphones" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
    </div>
    <div className="Categories-category">
      <img src={speakersCategoryIconDesktop} alt="speakersCategoryIconDesktop" />
      <img src={speakersCategoryIconMobile} alt="speakersCategoryIconMobile" />
      <span className="Categories-category-shadow" />
      <p className="Categories-category-title">SPEAKERS</p>
      <button className="button button3" type="button"><NavLink to="/speakers" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
    </div>
    <div className="Categories-category">
      <img src={earphonesCategoryIconDesktop} alt="earphonesCategoryIconDesktop" />
      <img src={earphonesCategoryIconMobile} alt="earphonesCategoryIconMobile" />
      <span className="Categories-category-shadow" />
      <p className="Categories-category-title">EARPHONES</p>
      <button className="button button3" type="button"><NavLink to="/earphones" exact>SHOP</NavLink><span style={{ backgroundImage: `url(${rightArrow})` }} /></button>
    </div>
  </div>
);

Categories.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Categories;
