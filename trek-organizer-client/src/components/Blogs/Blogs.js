import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section className="blog_wrapper">

      <div className="container">
        <div className="heading-top">
          <h1>BLOG</h1>
          <p>
            This page constitutes blog content
          </p>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-8">
            <div className="post_block">
              <div className="col-md-12">
                <div className="col-md-5">
                  <img src="/images/blog/post_img.jpg" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>Lorem ispum dolor sit amet</h2>

                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
                  <div className="catageory">
                    <ul>
                      <li><Link to="">MAY 28, 2015</Link></li>
                      <li><Link to="">By Admin</Link></li>
                      <li><Link to="">3 Comments</Link></li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>

                  <Link to="single-post.html" className="read_more">Read More</Link>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>


            <div className="post_block">
              <div className="col-md-12">
                <div className="col-md-5">
                  <img src="/images/blog/post_img2.jpg" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>Lorem ispum dolor sit amet</h2>

                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
                  <div className="catageory">
                    <ul>
                      <li><Link to="">MAY 28, 2015</Link></li>
                      <li><Link to="">By Admin</Link></li>
                      <li><Link to="">3 Comments</Link></li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>

                  <Link to="single-post.html" className="read_more">Read More</Link>

                </div>
              </div>
              <div className="clearfix"></div>
            </div>


            <div className="post_block">
              <div className="col-md-12">
                <div className="col-md-5">
                  <img src="/images/blog/post_img3.jpg" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>Lorem ispum dolor sit amet</h2>

                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
                  <div className="catageory">
                    <ul>
                      <li><Link to="">MAY 28, 2015</Link></li>
                      <li><Link to="">By Admin</Link></li>
                      <li><Link to="">3 Comments</Link></li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>

                  <Link to="single-post.html" className="read_more">Read More</Link>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="pagination-container text-center">
              <ul className="pagination">
                <li className="previous"><Link to="#">Previous</Link></li>
                <li><Link to="#">1</Link></li>
                <li className="active"><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">4</Link></li>
                <li><Link to="#">5</Link></li>
                <li className="next"><Link to="#">Next</Link></li>
              </ul>
            </div>
          </div>

          Sidebar Start Here
          <div className="col-md-3 col-sm-4">
            <div className="sidebar">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
                <button type="submit" className="submit">Go</button>
              </div>

              <div className="widget">
                <h2 className="heading">Category</h2>

                <ul>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                </ul>

              </div>


              <div className="widget">
                <h2 className="heading">Archive</h2>

                <ul>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                </ul>

              </div>


              <div className="widget">
                <h2 className="heading">Recent Post</h2>

                <ul>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                  <li><Link to="">Travel</Link></li>
                </ul>

              </div>


            </div>
          </div>
          Sidebar End Here

        </div>
      </div>
      <div className="clearfix"></div>
    </section>
  )
}

export default Blogs;