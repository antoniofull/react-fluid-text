import React from 'react';
import PropTypes from 'prop-types';

import { useFluidFontSize } from './useFluidFontSize';

const defaultProps = {
  minFontSize: 16,
  maxFontSize: 512,
  compressor: 1,
  as: 'h1'
};

const FluidText = props => {
  const {
    minFontSize,
    maxFontSize,
    compressor,
    as,
    style,
    text,
    className
  } = props;

  const [ref, fontSize] = useFluidFontSize({
    compressor,
    minFontSize,
    maxFontSize
  });

  // Add Styles
  const styles = {
    ...(style || {}),
    width: '100%',
    display: 'block',
    fontSize: fontSize
  };

  // Create container
  const FitContainer = as;
  return (
    <FitContainer className={className} ref={ref} style={styles}>
      {text}
    </FitContainer>
  );
};

FluidText.defaultProps = defaultProps;

FluidText.propTypes = {
  text: PropTypes.string.isRequired,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
  compressor: PropTypes.number,
  as: PropTypes.string
};

export default FluidText;
