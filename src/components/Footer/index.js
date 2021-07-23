import './index.css'

const Footer = () => (
  <div className="footer">
    <h1 className="footer-title">
      COVID19<span className="india">INDIA</span>
    </h1>
    <p className="footer-desc">
      We stand with everyone fighting on the front lines
    </p>
    <div className="footer-icon-container">
      <img
        className="footer-icon"
        src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625818880/Covid19/git-icon_rnlqs5.png"
        alt="git-icon"
      />
      <img
        className="footer-icon"
        src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625818878/Covid19/instagram-icon_g3bkji.png"
        alt="twitter-icon"
      />
      <img
        className="footer-icon"
        src="https://res.cloudinary.com/covid-dashboard/image/upload/v1625818880/Covid19/twitter_icon_ojjrzx.png"
        alt="instagram-icon"
      />
    </div>
  </div>
)

export default Footer
