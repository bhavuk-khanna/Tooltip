import React from 'react';

function PositionSelector(props) {
  const update = props.updateTooltipPosition;
  return (
    <div className="custom-select" onChange={update}>
        <label for="position">Please select the postion for the tooltip: </label>
        <select name="position">
            <option value="top" onSelect={()=>update("top")}>Top</option>
            <option value="bottom"  onSelect={()=>update("bottom")}>Bottom</option>
            <option value="left"  onSelect={()=>update("left")}>Left</option>
            <option value="right"  onSelect={()=>update("right")}>Right</option>
        </select>

    </div>
    
    );
}

export default PositionSelector;