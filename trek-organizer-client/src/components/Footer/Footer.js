import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="footer-content">
                <div className="footer-logo">
                  <img src="/images/footer-logo.png" alt="" />
                </div>
                <div className="footer-text">
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                  </p>
                </div>
                <div className="footer-address">
                  <ul>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> king Street, Huntavilla, Ontario Canada
                    </li>

                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i> +(000)-865-5842

                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-content">
                <div className="news">
                  <p>
                    Newsletter Subscribe
                  </p>
                </div>
                <div className="social-icons">
                  <ul>
                    <li>
                      <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i>FACEBOOK</Link></li>
                    <li>
                      <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i>TWITTER</Link>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/georgi-tsekov-12a45b1b3/"><i className="fa fa-linkedin" aria-hidden="true"></i>LINKEDIN</a>
                    </li>
                  </ul>
                </div>
                <p className="copyright">
                  Open Source | Link: <a href="https://github.com/GeorgiTsekov/TrekOrganizer">Github.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;