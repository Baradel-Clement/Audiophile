import React from 'react';
import { NavLink } from 'react-router-dom';

import Categories from '../Categories';
import Best from '../Best';
import { topFunction } from '../../utils';

const Homepage = () => (
  <div className="Homepage">
    <div className="Homepage-Hero">
      <div className="Homepage-Hero-wrap">
        <div className="Homepage-Hero-desc">
          <p className="overline">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional
            build quality made for the passionate music enthusiast.
          </p>
          <NavLink onClick={() => topFunction()} to="/xx99-mark-two-headphones" exact><button type="button" className="button button1">SEE PRODUCT</button></NavLink>
        </div>
        <div className="Homepage-Hero-image" />
      </div>
    </div>
    <Categories id="CategoriesHomepage" />
    <div className="HeadlineProducts">
      <div className="HeadlineProducts-ZX9">
        <div className="HeadlineProducts-ZX9-illu" />
        <svg id="HeadlineProducts-ZX9-circles" width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5" /><circle cx="472" cy="472" r="270.5" /><circle cx="472" cy="472" r="471.5" /></g></svg>
        <div className="HeadlineProducts-ZX9-desc">
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade to premium speakers that are phenomenally
            built to deliver truly remarkable sound.
          </p>
          <NavLink onClick={() => topFunction()} to="/zx9-speaker" exact><button type="button" className="button button2-reverse">SEE PRODUCT</button></NavLink>
        </div>
      </div>
      <div className="HeadlineProducts-ZX7">
        <div className="HeadlineProducts-ZX7-desc">
          <h4>ZX7 SPEAKER</h4>
          <NavLink onClick={() => topFunction()} to="/zx7-speaker" exact><button className="button button2" type="button">SEE PRODUCT</button></NavLink>
        </div>
      </div>
      <div className="HeadlineProducts-YX1">
        <div className="HeadlineProducts-YX1-illu" />
        <div className="HeadlineProducts-YX1-desc">
          <div className="HeadlineProducts-YX1-desc-wrap">
            <h4>YX1 EARPHONES</h4>
            <NavLink onClick={() => topFunction()} to="/yx1-earphones" exact><button className="button button2" type="button">SEE PRODUCT</button></NavLink>
          </div>
        </div>
      </div>
    </div>
    <Best id="HomepageBest" />
  </div>
);

export default Homepage;
