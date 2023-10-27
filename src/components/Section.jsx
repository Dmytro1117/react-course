import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div style={{ outline: '1px solid tomato' }}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
