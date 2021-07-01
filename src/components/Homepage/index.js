import React from 'react';

import Categories from '../Categories';

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
          <button type="button" className="button button1">SEE PRODUCT</button>
        </div>
        <div className="Homepage-Hero-image" />
      </div>
    </div>
    <Categories marginTop={120} />
  </div>
);

export default Homepage;
