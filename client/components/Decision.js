import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DecisionForm from './DecisionForm'
import Points from './Points'
import {postDecision} from '../store'


class Decision extends Component {

  render() {
    return (
      <div>
        <div className="header-question">
        {
          !this.props.decision.question
          ? <h1>What is your mind grappling with?</h1>
          : <h1>{this.props.decision.question}</h1>
        }
        </div>

        {
          !this.props.decision.question
          ? <div className="question">
              <DecisionForm postDecision={(e) => this.props.loadPostDecision(e)}/>
              </div>
          : <div className="points-section">
            <Points decision={this.props.decision} posPoints={this.props.posPoints} conPoints={this.props.conPoints}/>
            </div>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    decision: state.decision,
    posPoints: state.posPoint,
    conPoints: state.conPoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPostDecision: function(e) {
      e.preventDefault();
      const body = {
        question: e.target.question.value
      }
      dispatch(postDecision(body))
    }
  }
}

export default Decision = connect(mapStateToProps, mapDispatchToProps)(Decision)
