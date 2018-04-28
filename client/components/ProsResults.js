import React, {Component} from 'react'
import {connect} from 'react-redux'
import { VictoryPie, VictoryTooltip } from 'victory'
import {fetchPoints} from '../store'
import {Link} from 'react-router-dom'

class ProsResults extends Component {

  componentDidMount() {
    this.props.loadAllPoints()
  }

  render() {
    const resultPie = filterData(this.props.allPoints, this.props.decision.id)
    const posDataResult = posData(this.props.allPoints, this.props.decision.id)
    const prosWeight = resultPie[0].y
    const consWeight = resultPie[1].y

    return (
      <div>
        {
          prosWeight > consWeight
          ? <h1>DO IT. YOU SHOULD "{this.props.decision.question}"</h1>
          : <h1>Don't. Just don't "{this.props.decision.question}"</h1>
        }
        <div className="results-links">
          <Link to="/results">Final Result</Link>
          <Link to="/results/pros">Pros</Link>
          <Link to="/results/cons">Cons</Link>
        </div>
        <VictoryPie
          labelComponent={<VictoryTooltip/>}
          width={400}
          height={400}
          data={posDataResult}
          x="name"
          y="weight"
          colorScale="warm"
          innerRadius={50}
          padding={55}
          style={{
            labels: {
              fontSize: 8,
              fill: "#c43a31",
              padding: 4
            }
          }}
        />
      </div>
    )
  }
}

const posData = (allData, id) => {
  const data = allData.filter(data => data.decisionId === id)
  const findPros = data.filter(pro => {
    return pro.category === "pro"
  })
  return findPros
}

const filterData = (allData, id) => {
  const data = allData.filter(data => data.decisionId === id)

  const prosWeight = data.filter(p => {
    return p.category === "pro"
    }).reduce((accum, currentVal) => {
    return accum + currentVal.weight
  }, 0)

  const consWeight = data.filter(c => {
    return c.category === "con"
    }).reduce((accum, currentVal) => {
    return accum + currentVal.weight
  }, 0)

  return [ { x: "pros", y: prosWeight }, { x: "cons", y: consWeight }]
}


const mapStateToProps = (state) => {
  return {
    allPoints: state.allPoints,
    decision: state.decision
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAllPoints: function() {
      dispatch(fetchPoints())
    }
  }
}


export default ProsResults = connect(mapStateToProps, mapDispatchToProps)(ProsResults)
