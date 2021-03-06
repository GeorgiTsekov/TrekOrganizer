import { Link } from "react-router-dom"

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h3>
          Welcome to the page
        </h3>
        <h4>
          Here you can post the images of your clients or your products.
        </h4>
        <div id="images">
          <div className="row">
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>


            </div>
          </div>
        </div>
        <div id="images">
          <div className="row">
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>


            </div>
          </div>
        </div>
        <div id="images">
          <div className="row">
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner.jpg" alt="" />
              </Link>


            </div>
          </div>
        </div>
        <div id="images">
          <div className="row">
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/images/banner-2.jpg" data-fancybox data-caption="My caption">
                <img src="/images/banner-2.jpg" alt="" />
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;