import {Component} from 'react'
import Footer from '../Footer'
import './index.css'

class CovidState extends Component {
  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const dataUrl = 'https://api.covid19india.org/v4/min/data.min.json'
    const response = await fetch(dataUrl)
    const jsonData = await response.json()
    console.log(id)
    console.log(jsonData[id])
  }

  render() {
    // const {searchResults, statesList} = this.props
    return (
      <div className="state-stats-container">
        {/* <h1>{searchResults}</h1> */}

        {/* ******************************** Main Container  ************************* */}

        {/* <div className="state-header">
          <div className="state-name-container">
            <h1 className="state-name-only">Andhra Pradesh</h1>
            <p className="update-text">Last update on march 28th 2021.</p>
          </div>
          <div>
            <p className="tested-heading">Tested</p>
            <p className="tested-count">2,02,39,490</p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-container-1">
            <div className="stat-container confirmed-con">
              <p className="stat-name stat-confirmed">Confirmed</p>
              <img
                className="stat-icon"
                src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625813446/Covid19/confirmed-icon_vwfauq.png"
                alt="confirmed-icon"
              />
              <h1 className="stat-count count-confirmed">11,24,60,871</h1>
            </div>

            <div className="stat-container active-con">
              <p className="stat-name stat-active">Active</p>
              <img
                className="stat-icon"
                src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815230/Covid19/protection-icon_w6qmtr.png"
                alt="confirmed-icon"
              />
              <h1 className="stat-count count-active">11,24,60,871</h1>
            </div>
          </div>
          <div className="stat-container-2">
            <div className="stat-container recovered-con">
              <p className="stat-name stat-recovered">Recovered</p>
              <img
                className="stat-icon"
                src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815299/Covid19/vector-icon_tubmlu.png"
                alt="active-icon"
              />
              <h1 className="stat-count count-recovered">11,24,60,871</h1>
            </div>

            <div className="stat-container deceased-con">
              <p className="stat-name stat-deceased">Deceased</p>
              <img
                className="stat-icon"
                src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625815361/Covid19/outline-icon_lrbm0g.png"
                alt="active-icon"
              />
              <h1 className="stat-count count-deceased">11,24,60,871</h1>
            </div>
          </div>
        </div>

        <div className="district-stats">
          {}
        </div>

        */}

        <Footer />
      </div>
    )
  }
}

export default CovidState
