import React from 'react';
import TooltipBtn from './components/TooltipBtn';
import Tooltip from './components/Tooltip';
import PositionSelector from './components/PositionSelector';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      position: "top",
      visible: false
    }
  }

  handleMouseOver= (event) =>{
    this.setState({
      visible: true
    })


  }
  handleMouseOut = () =>{
    console.log("Mouse out");
    this.setState({
      visible: false
    })
  }  

  updateTooltipPosition = (event) =>{
    console.log();
    this.setState({
      position: event.target.value 
    })
  }
  render(){
    const {position,visible} = this.state;
    return (
      <div className="App">
        <PositionSelector updateTooltipPosition ={this.updateTooltipPosition}/>
        <TooltipBtn handleMouseOver={this.handleMouseOver} handleMouseOut ={this.handleMouseOut}/>
        {visible && <Tooltip position={position}/>}
      </div>
    );
  }
  
}

export default App;
