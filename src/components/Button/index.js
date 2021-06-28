import React from 'react';
import PropTypes from 'prop-types';

import rightArrow from '../../assets/AudiophileAssets/shared/desktop/icon-arrow-right.svg';

const Button = ({ content, type }) => (
  <>
    {
      (type === 'button1' || type === 'button2') && (
        <button type="button" className={`button ${type}`}>
          {content}
        </button>
      )
    }
    {
      type === 'button3' && (
        <button type="button" className={`button ${type}`}>
          {content}
          <span style={{ backgroundImage: `url(${rightArrow})` }} />
        </button>
      )
    }
  </>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
