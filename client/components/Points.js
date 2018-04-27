import React, {Component} from 'react'
import YouShould from './YouShould'

class Points extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoveringLeft: false,
      isHoveringRight: false
    }
    this.handleMouseHoverLeft = this.handleMouseHoverLeft.bind(this)
    this.handleMouseHoverRight = this.handleMouseHoverRight.bind(this)

  }

handleMouseHoverLeft() {
  this.setState(this.toggleHoverStateLeft)
}

handleMouseHoverRight() {
  this.setState(this.toggleHoverStateRight)
}

toggleHoverStateLeft(state) {
  return {
    isHoveringLeft: !state.isHoveringLeft
  }
}

toggleHoverStateRight(state) {
  return {
    isHoveringRight: !state.isHoveringRight
  }
}

  render() {
    return (
      <div className="points">
        <div onMouseEnter={this.HandleMouseHover} onMouseLeave={this.handleMouseHoverLeft} className="you-should">
          <h1>You Should:</h1>
          {
            this.state.isHoveringLeft &&
            <div>
              <YouShould />
            </div>
          }
        </div>
        <div onMouseEnter={this.HandleMouseHover} onMouseLeave={this.handleMouseHoverRight} className="you-should-not">
          <h1>You Should Not:</h1>
        {
          this.state.isHoveringRight &&
          <div>
            <h3>Reason 1</h3>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default Points
