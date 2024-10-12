import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minDisplay: 25, min: 25, sec: 0, running: false}

  controller = () => {
    const {running} = this.state

    if (running === true) {
      clearInterval(this.firstIntervel)
    } else {
      this.firstIntervel = setInterval(this.displayingMinits, 1000)
    }

    this.setState(each => {
      if (each.running === true) {
        return {running: !each.running}
      }
      return {running: !each.running}
    })
  }

  reseted = () => {
    clearInterval(this.firstIntervel)
    this.setState({
      minDisplay: 25,
      min: 25,
      sec: 0,
      running: false,
    })
  }

  incrementMin = () => {
    this.setState(each => {
      if (each.running === false) {
        return {
          minDisplay: each.minDisplay + 1,
          min: each.min + 1,
        }
      }
      return {each}
    })
  }

  decrementMin = () => {
    this.setState(each => {
      if (each.running === false) {
        return {
          minDisplay: each.minDisplay - 1,
          min: each.min - 1,
        }
      }
      return {each}
    })
  }

  displayingMinits = () => {
    this.setState(each => {
      if (each.min === 0 && each.sec === 0) {
        clearInterval(this.firstIntervel)
        return {minDisplay: 25, min: 25, sec: 0, running: false}
      }
      if (each.sec === 0) {
        return {min: each.min - 1, sec: 59}
      }
      return {sec: each.sec - 1}
    })
  }

  render() {
    const {min, sec, minDisplay, running} = this.state
    const val = running ? 'Running' : 'Paused'
    const head = running ? 'Pause' : 'Start'
    const img = running
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '

    const imgalt = running ? 'reset icon' : 'play icon'
    const addingLeadingZero = a => (a < 10 ? `0${a}` : a.toString())

    const second = addingLeadingZero(sec)
    const mini = addingLeadingZero(min)
    return (
      <div className="container">
        <div className="sub-comtainer">
          <h1>Digital Timer</h1>{' '}
          <div className="main-container">
            <div className="twoCardsContainer">
              <div className="displayTimer">
                <div className="displayTimerCore">
                  <div className="hell">
                    <h1 className="displayHead">
                      {mini}:{second}
                    </h1>
                    <p>{val}</p>
                  </div>
                </div>
              </div>
              <div className="cardRight">
                <div className="controlAndRest">
                  <div className="indicontrol">
                    {/* eslint-disable-next-line */}
                    <button
                      className="controlImgbtn1"
                      onClick={this.controller}
                    >
                      <img alt={imgalt} className="controlImg" src={img} />
                    </button>
                    <button type="button">
                      <h2>{head}</h2>
                    </button>
                  </div>
                  <div className="indicontrol">
                    {/* eslint-disable-next-line */}
                    <button className="controlImgbtn1" onClick={this.reseted}>
                      <img
                        alt="reset icon"
                        className="controlImg"
                        src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png  "
                      />
                    </button>
                    <button type="button">
                      <h2>Reset</h2>
                    </button>
                  </div>
                </div>
                <p>Set Timer Limit</p>
                <div className="incrementAndDecrement">
                  <button
                    type="button"
                    onClick={this.decrementMin}
                    className="controlbtns"
                  >
                    -
                  </button>

                  <div className="IncrementDicrementCard">
                    <p>{minDisplay}</p>
                  </div>

                  <button
                    type="button"
                    onClick={this.incrementMin}
                    className="controlbtns"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
