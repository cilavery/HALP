import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postPointPos} from '../store'

class YouShould extends Component {
  constructor(props) {
    super(props)
    this.state ={
      pointName: '',
      weight: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }


  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  clearForm() {
    this.setState({
      pointName: '',
      weight: ''
    })
  }

  render() {
    const decisionId = this.props.decision.id
    const posPoints = this.props.point

    return (
      <div className="should-you">
        {
          posPoints && posPoints.map(point => {
            return (
            <h3 key={point.id}>{point.weight} - {point.name}</h3>
            )
          })
        }

        <form onSubmit={(e) => {
          this.props.setProPoint(e,decisionId)
          this.clearForm()
          }}>
          <input type="text" name="pointName" placeholder="Reason" className="form-style" onChange={(e) => this.handleChange(e)} value={this.state.pointName} size="35"/>
          <input type="text" name="weight" placeholder="weight 1-10" className="form-style" size="11" onChange={(e) => this.handleChange(e)} value={this.state.weight}/>
          <button type="submit" className="btn-point"></button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProPoint: function(e, decisionId) {
      e.preventDefault();
      const body = {
        name: e.target.pointName.value,
        weight: +e.target.weight.value,
        category: 'pro',
        decisionId
      }
      dispatch(postPointPos(body))
    }
  }
}

export default YouShould = connect(null, mapDispatchToProps)(YouShould)


