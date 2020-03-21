import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {  
      return props => { 
        let ourchildren = props.children; 
        colors.forEach(color => {
          ourchildren = 
            <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color}}>
              {ourchildren}
            </div>
        })
        return ourchildren;
      }
      }  
  }

export { withRainbowFrame };