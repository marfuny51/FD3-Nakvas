import React from 'react';

function withRainbowFrame(colors) {
  return function(Component) {
    return props => (
      <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color}}>
        <Component {...props} />
      </div>
    );
};
}

export { withRainbowFrame };