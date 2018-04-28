import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import YouShould from './YouShould'
import YouShouldNot from './YouShouldNot'
import Results from './Results'


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
  this.setState({
    isHoveringLeft: true
  })
}

handleMouseHoverRight() {
  this.setState({
    isHoveringRight: true
  })
}

  render() {
    return (
      <div>
        <div className="points">
          <div onMouseEnter={this.handleMouseHoverLeft} className="you-should">
            <h1>You Should:</h1>
            {
              this.state.isHoveringLeft &&
              <div>
                <YouShould decision={this.props.decision} point={this.props.posPoints}/>
              </div>
            }
          </div>
          <div onMouseEnter={this.handleMouseHoverRight} className="you-should-not">
            <h1>You Should Not:</h1>
          {
            this.state.isHoveringRight &&
            <div>
              <YouShouldNot decision={this.props.decision} point={this.props.conPoints}/>
            </div>
          }
          </div>
        </div>
        <div className="btn-results">
        {
          this.state.isHoveringLeft && this.state.isHoveringRight
          ? <div>
            <Link to="/results" className="btn-style" id="results">submit results</Link>
            </div>
          : null
        }
        </div>
      </div>

    )
  }
}

export default Points
