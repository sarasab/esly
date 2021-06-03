import React from 'react';
import './styles/global.css';
import Box from './components/box.jsx';
import { render } from '@testing-library/react';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }
  onTempChange = (e) => {
    this.setState({ temperature: e.target.value });
  };
  onHeartChange = (e) => {
    this.setState({ heart: e.target.value });
  };
  onStepsChange = (e) => {
    this.setState({ steps: e.target.value });
  };


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />

          <Box icon="directions_walk" color="black" unit="steps" value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}/>

          <Box icon="favorite" color="red"  unit="bpm" value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}/>

          <Box icon="wb_sunny" color="yellow" unit="°C" value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTempChange}/>
        </div>
      </div>
    );
   
  }

 
}


 


export default App;
