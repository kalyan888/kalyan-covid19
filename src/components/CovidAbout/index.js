import {Component} from 'react'
import Loader from '../Loader'
import './index.css'

import Footer from '../Footer'

class CovidAbout extends Component {
  state = {
    isLoading: true,
    faqData: [],
  }

  componentDidMount() {
    this.getLastUpdateDate()
    this.getFAQs()
  }

  getLastUpdateDate = async () => {
    const url = 'https://data.covid19india.org/v4/min/data.min.json'
    const response = await fetch(url)
    const fetchedData = await response.json()
    const fetchedDate = fetchedData.TT
    this.setState({fetchedDate})
  }

  getFAQs = async () => {
    const url = 'https://data.covid19india.org/website_data.json'
    const response = await fetch(url)
    const fetchedData = await response.json()
    const faqDetails = fetchedData.faq

    this.setState({faqData: faqDetails, isLoading: false})
  }

  getDate = () => {
    const {fetchedDate} = this.state
    let updatedDate
    if (fetchedDate !== undefined) {
      const a = new Date(fetchedDate.meta.last_updated)
      updatedDate = a.toString().slice(0, 15)
    }
    return updatedDate
  }

  render() {
    const {isLoading, faqData} = this.state
    // console.log(faqData)
    return (
      <div className="loader">
        {isLoading ? (
          <>
            <Loader isLoading={isLoading} />
          </>
        ) : (
          <div className="about-container">
            <h1 className="about-heading">About</h1>
            <p className="update-text">
              {`Last update on march ${this.getDate()}`}
            </p>
            <h3 className="vaccine-text">
              COVID-19 vaccines be ready for distribution
            </h3>
            <div className="question-and-answer-container">
              <p className="question">{faqData[0].question}</p>
              <p className="answer">{faqData[0].answer}</p>
              <p className="question">{faqData[1].question}</p>
              <p className="answer">{faqData[1].answer}</p>
              <p className="question">{faqData[2].question}</p>
              <p className="answer">{faqData[2].answer}</p>
              <p className="question">{faqData[3].question}</p>
              <p className="answer">{faqData[3].answer}</p>
              <p className="question">{faqData[4].question}</p>
              <p className="answer">{faqData[4].answer}</p>
              <p className="question">{faqData[5].question}</p>
              <p className="answer">{faqData[5].answer}</p>
            </div>
            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default CovidAbout
