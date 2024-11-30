import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  onCountMangoes = () => {
    this.setState(preveState => ({
      count1: preveState.count1 + 1,
    }))
  }

  onCountBananas = () => {
    this.setState(preveState => ({
      count2: preveState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="background-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="span-element">{count1}</span> mangoes{' '}
            <span className="span-element">{count2}</span> bananas{' '}
          </h1>
          <div className="card">
            <div className="fruit-card ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onCountMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="fruit-card ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onCountBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
