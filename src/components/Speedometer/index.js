import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increasSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed >= 200) {
        return {speed: 200}
      }
      return {speed: prevState.speed + 10}
    })
  }

  decreasSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed <= 0) {
        return {speed: 0}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="imgSize"
          alt="speedometer"
        />
        <h1 className="heading">
          Speed is <span>{speed}mph</span>
        </h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btn-contanier">
          <button className="btn" type="button" onClick={this.increasSpeed}>
            Accelerate
          </button>
          <button className="btn" type="button" onClick={this.decreasSpeed}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
