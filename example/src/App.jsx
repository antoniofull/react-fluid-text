import React from 'react';

// import FluidText from 'react-fluid-text';
import FluidText, { useFluidFontSize } from '../../lib';

const App = () => {
  const [ref, fontSize] = useFluidFontSize({ compressor: 0.5 });

  return (
    <>
      <div className='has-font' ref={ref}>
        {Math.round(fontSize)}
      </div>
      <FluidText compressor={0.5} text='Resize me!' />
    </>
  );
};
export default App;
