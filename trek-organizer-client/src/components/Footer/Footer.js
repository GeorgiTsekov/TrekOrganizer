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
                    <div className="subscribe">
                      <form>
                        <div className="input-group">
                          <input type="email" className="form-control" size="50" placeholder="Enter E-mail" required />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-danger">Subscribe</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="social-icons">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>

                          FACEBOOK</a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>

                          TWITTER</a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i>

                          LINKEDIN</a></li>
                      </ul>
                    </div>
                    <p className="copyright">
                      Copyright 2018. Designed by NavThemes | Distributed by <a href="https://themewagon.com/">ThemeWagon</a>
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