import React from 'react';

function Tooltip(props) {
  
  return (  
    <div className= {`tooltiptext ${props.position}`}   >
        {`${props.position.charAt(0).toUpperCase() + props.position.slice(1)} Tooltip`}
    </div>
    );
}

export default Tooltip;