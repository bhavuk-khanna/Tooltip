import React from 'react';

function TooltipBtn(props) {
 
  return (    
    <div className="TooltipBtn" onMouseOver={props.handleMouseOver} onMouseOut= {props.handleMouseOut}>
      Hover over me!
    </div>
    
  );
}

export default TooltipBtn;