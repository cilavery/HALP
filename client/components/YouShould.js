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
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={(e) => this.props.setProPoint(e)}>
          <input type="text" name="pointName" placeholder="Reason" className="form-style" onChange={this.handleChange}/>
          <input type="text" name="weight" placeholder="weight 1-10" className="form-style" size="11" onChange={this.handleChange}/>
          <button type="submit" className=".btn-point"></button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    should: state.should
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProPoint: function(e) {
      e.preventDefault();
      const body = {
        name: e.target.pointName.value,
        weight: +e.target.weight.value,
        category: 'Pro'
      }
      dispatch(postPointPos())
    }
  }
}

export default YouShould = connect(mapStateToProps, mapDispatchToProps)(YouShould)


