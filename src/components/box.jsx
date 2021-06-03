import React from 'react';
class App extends React.Component {
  render() {
    let slider = null;
    if (this.props.icon != 'local_drink') {
      slider = (
        <input type="range" id="volume" name="jauge" min="0" max="11"></input>
      );
    }

    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons "
          style={{fontSize: 100, color: this.props.color}}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value}
          <br />
          {this.props.unit}
        </p>

        {slider}
      </div>
    );
  }
}

export default App;
