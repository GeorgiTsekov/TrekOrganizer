const Blog = () => {
    return (
        <section className="blog_wrapper">

            <div className="container">
                <div className="heading-top">
                    <h1>SINGLE BLOG</h1>
                    <p>
                        Welcome to single blog page
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-8">
                        <div className="post_block">
                            <div className="col-md-12">
                                <img src="/images/blog/post_img2.jpg" alt="" />
                                <div className="single-blog-content">
                                    <h2>Lorem ispum dolor sit amet</h2>

                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
                                    <div className="catageory">
                                        <ul>
                                            <li><a href="">MAY 28, 2015</a></li>
                                            <li><a href="">By Admin</a></li>
                                            <li><a href="">3 Comments</a></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="author_block">
                            <h2>About Author</h2>
                            <div className="col-md-2 col-sm-2 "> <img src="/images/blog/auther_img.png" /></div>
                            <div className="col-md-10 col-sm-10 no-padding">
                                <h3>Author</h3>
                                <span>Web Designer</span>
                                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipscivelit... ""There is no one who loves "</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="related_post">
                            <h2>Related Post</h2>
                            <div className="col-md-4 col-sm-4">
                                <img src="/images/blog/related+post.jpg" />
                                <h3>heading goes here</h3>
                                <a href=""><i className="fa fa-comments"></i> comments </a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src="/images/blog/related+post.jpg" />
                                <h3>heading goes here</h3>
                                <a href=""><i className="fa fa-comments"></i> comments </a>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src="/images/blog/related+post.jpg" />
                                <h3>heading goes here</h3>
                                <a href=""><i className="fa fa-comments"></i> comments </a>
                            </div>
                            <div className="clearfix"></div>
                        </div>


                        <div className="comments">
                            <h2>3 Comments</h2>

                            <div className="comment_block">
                                <div className="col-md-10 col-sm-10">
                                    <div className=" col-md-2 col-sm-2"><img src="/images/blog/comment_img.jpg" /></div>
                                    <div className="col-md-10 col-sm-10 no-padding">
                                        <h3>Jon Doe</h3>
                                        <span>25 DEC 2015 12.35 AM</span>
                                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipscivelit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2"><a href="" className="readmore">Reply</a></div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="comment_block col-md-offset-1">
                                <div className="col-md-10 col-sm-10">
                                    <div className=" col-md-2 col-sm-2"><img src="/images/blog/comment_img.jpg"/></div>
                                    <div className="col-md-10 col-sm-10 no-padding">
                                        <h3>Jon Doe</h3>
                                        <span>25 DEC 2015 12.35 AM</span>
                                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipscivelit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2"><a href="" className="readmore">Reply</a></div>
                                <div className="clearfix"></div>
                            </div>


                            <div className="comment_block">
                                <div className="col-md-10 col-sm-10">
                                    <div className=" col-md-2 col-sm-2"><img src="/images/blog/comment_img.jpg" /></div>
                                    <div className="col-md-10 col-sm-10 no-padding">
                                        <h3>Jon Doe</h3>
                                        <span>25 DEC 2015 12.35 AM</span>
                                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipscivelit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2"><a href="" className="readmore">Reply</a></div>
                                <div className="clearfix"></div>
                            </div>


                            <div className="leave_reply">
                                <h2>Leave a Reply</h2>
                                <form>
                                    <div className="form-group col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Name*" name="" type="text" />
                                    </div>
                                    <div className="form-group col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email*" name="" type="text" />
                                    </div>
                                    <div className="form-group col-md-12 col-sm-12">
                                        <textarea className="form-control" rows="6" placeholder="Comment*" name=""></textarea>
                                    </div>
                                    <div className="form-group col-md-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>

                            </div>


                            <div className="clearfix"></div>
                        </div>


                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="sidebar">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit" className="submit">Go</button>
                            </div>

                            <div className="widget">
                                <h2 className="heading">Catageory</h2>

                                <ul>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                </ul>

                            </div>


                            <div className="widget">
                                <h2 className="heading">Archive</h2>

                                <ul>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                </ul>

                            </div>


                            <div className="widget">
                                <h2 className="heading">Recent Post</h2>

                                <ul>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Travel</a></li>
                                </ul>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className="clearfix"></div>
        </section>
    )
}

export default Blog;