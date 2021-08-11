import {Component} from 'react'

// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts'

import './index.css'

class DailyAndCumulativeGraphs extends Component {
  componentDidMount() {
    this.getGraphsData()
  }

  getGraphsData = async () => {
    const dataUrl = 'https://api.covid19india.org/v4/min/data.min.json'
    const response = await fetch(dataUrl)
    const jsonData = await response.json()
    console.log(jsonData)
  }

  render() {
    // const {stateData} = this.props
    return <h1>Hello</h1>
  }
}

export default DailyAndCumulativeGraphs
