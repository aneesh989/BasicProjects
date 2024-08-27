import React from 'react';
import PropTypes from 'prop-types';
import './TicTacToe.css'; // Assuming the styles are in a CSS file

const FancyButton = ({ onClick, image, children }) => {
  return (
    <button className="fancy-button custom-bg" onClick={onClick} style={{ '--button-image': `url(${image})` }}>
      <span>{children}</span>
    </button>
  );
};

FancyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FancyButton;
