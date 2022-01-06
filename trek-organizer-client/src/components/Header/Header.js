const Header = () => {
    return (
        <section className="header">
            <div className="navbar-option">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-left">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>



            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <h1>Be <span>Faster</span></h1>
                                <p>Live Life to the Fullest</p>
                            </div>
                            <div className="item">
                                <h1>Be <span>Faster</span></h1>
                                <p>Live Life to the Fullest</p>

                            </div>
                            <div className="item">
                                <h1>Be <span>Faster</span></h1>
                                <p>Live Life to the Fullest</p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Header;