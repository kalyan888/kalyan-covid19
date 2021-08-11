import {Component} from 'react'
import StateStatsContainer from './StateStatsContainer'
import DailyAndCumulativeGraphs from './DailyAndCumulativeGraphs'
import Loader from '../Loader'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class CovidState extends Component {
  state = {
    stateCode: 'AN',
    isLoading: true,
    covidData: {},
    clickedCountType: 'confirmed',
    districts: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const dataUrl = 'https://api.covid19india.org/v4/min/data.min.json'
    const response = await fetch(dataUrl)
    const jsonData = await response.json()
    this.updateState(id, jsonData)

    const fetchedData = Object.entries(jsonData)

    const filteringFetchedData = fetchedData.filter(each => each[0] === id)

    const stateTotalData = filteringFetchedData[0][1]

    const Districts = Object.entries(stateTotalData.districts).map(each => ({
      cityName: each[0],
      cityTotalData: each[1].total,
    }))

    this.setState({districts: Districts})
  }

  updateState = (id, jsonData) => {
    this.setState({stateCode: id, covidData: jsonData, isLoading: false})
  }

  getStateName = () => {
    const {stateCode} = this.state
    const stateName = statesList.filter(
      eachState => eachState.state_code === stateCode,
    )
    return stateName
  }

  getDistricts = () => {
    const {districts, clickedCountType} = this.state
    let nameAndData = ''

    if (clickedCountType === 'confirmed') {
      nameAndData = districts.map(each => ({
        eachCityName: each.cityName,
        eachData: each.cityTotalData.confirmed,
      }))
    } else if (clickedCountType === 'active') {
      nameAndData = districts.map(each => ({
        eachCityName: each.cityName,
        eachData:
          each.cityTotalData.confirmed -
          each.cityTotalData.deceased -
          each.cityTotalData.recovered,
      }))
    } else if (clickedCountType === 'recovered') {
      nameAndData = districts.map(each => ({
        eachCityName: each.cityName,
        eachData: each.cityTotalData.recovered,
      }))
    } else if (clickedCountType === 'deceased') {
      nameAndData = districts.map(each => ({
        eachCityName: each.cityName,
        eachData: each.cityTotalData.deceased,
      }))
    }
    const result = nameAndData
    console.log(districts)
    result.sort((a, b) => b.eachData - a.eachData)

    return result
  }

  setConfirm = () => {
    this.setState({clickedCountType: 'confirmed'})
  }

  setActive = () => {
    this.setState({clickedCountType: 'active'})
  }

  setRecovered = () => {
    this.setState({clickedCountType: 'recovered'})
  }

  setDeceased = () => {
    this.setState({clickedCountType: 'deceased'})
  }

  render() {
    const {covidData, stateCode, isLoading} = this.state
    const stateName = this.getStateName()
    const final = this.getDistricts()
    const stateData = covidData[stateCode]
    return (
      <div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <div className="state-stats-container">
            <div className="state-header">
              <div className="state-name-container">
                <h1 className="state-name-only">{stateName[0].state_name}</h1>
                <p className="update-text">
                  Last update on {stateData.meta.date}
                </p>
              </div>
              <div>
                <p className="tested-heading">Tested</p>
                <p className="tested-count">{stateData.total.tested}</p>
              </div>
            </div>

            <StateStatsContainer
              stateData={stateData}
              updateConfirm={this.setConfirm}
              updateActive={this.setActive}
              updateRecovered={this.setRecovered}
              updateDeceased={this.setDeceased}
            />

            <div className="districts">
              <h1 className="districts-heading">Top Districts</h1>
              <div className="each-state-name-count-container">
                {final.map(each => (
                  <ul className="each-state-name-count-lists">
                    <li className="each-state-name-count-items">
                      <h1 className="each-state-count">
                        {each.eachData > 0 ? (
                          each.eachData
                        ) : (
                          <span className="no-report-msg">No Report</span>
                        )}
                      </h1>
                      <p className="each-state-name">{each.eachCityName}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <DailyAndCumulativeGraphs stateData={stateData} />

            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default CovidState
