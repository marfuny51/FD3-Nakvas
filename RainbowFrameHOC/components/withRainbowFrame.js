import React from 'react';

function withRainbowFrame(colorsArr) {
    return function(Component) {  
      return props => { 
        let frames = <Component {...props}/>; 
        colorsArr.forEach(color => {
          frames = 
            <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color}}>
              {frames}
            </div>
        })
        return frames;
      }
      }  
  }

export { withRainbowFrame };