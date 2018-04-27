import React, {Component} from 'react'
import YouShould from './YouShould'
import YouShouldNot from './YouShouldNot';

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
    isHoveringLeft: true
  }
}

toggleHoverStateRight(state) {
  return {
    isHoveringRight: true
  }
}

  render() {
    return (
      <div className="points">
        <div onMouseEnter={this.HandleMouseHoverLeft} onMouseLeave={this.handleMouseHoverLeft} className="you-should">
          <h1>You Should:</h1>
          {
            this.state.isHoveringLeft &&
            <div>
              <YouShould decision={this.props.decision} point={this.props.posPoints}/>
            </div>
          }
        </div>
        <div onMouseEnter={this.HandleMouseHoverRight} onMouseLeave={this.handleMouseHoverRight} className="you-should-not">
          <h1>You Should Not:</h1>
        {
          this.state.isHoveringRight &&
          <div>
            <YouShouldNot decision={this.props.decision} point={this.props.conPoints}/>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default Points
