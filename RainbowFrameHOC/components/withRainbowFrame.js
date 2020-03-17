import React from 'react';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
function withRainbowFrame(colors) {
    return function(Component) {
      for (i=0, i<colors.length) {
      return props => (
         
        <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color[i]}}>
        <Component {...props} />
        </div>
        
      )
    }
  }

}

export { withRainbowFrame };