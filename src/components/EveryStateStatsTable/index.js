import {Component} from 'react'
import './index.css'

class EveryStateStatsTable extends Component {
  render() {
    const {state, covidData} = this.props
    const stateName = state.state_name
    const stateCode = state.state_code
    const stateData = covidData[stateCode]
    const confirmedCount = stateData.total.confirmed
    const recoveredCount = stateData.total.recovered
    const deceasedCount = stateData.total.deceased
    const activeCount = confirmedCount - recoveredCount - deceasedCount
    const populationCount = stateData.meta.population
    // console.log(stateData)

    return (
      <div className="state-count-con">
        <h1 className="state-name">{stateName}</h1>
        <p className="state-count confirmed-count">{confirmedCount}</p>
        <p className="state-count active-count"> {activeCount} </p>
        <p className="state-count recovered-count"> {recoveredCount} </p>
        <p className="state-count deceased-count"> {deceasedCount} </p>
        <p className="state-count population-count"> {populationCount} </p>
      </div>
    )
  }
}

export default EveryStateStatsTable
