const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="banner-heading">
                    <h2>About us</h2>
                    <p className="font-16">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="about-image">
                            <img src="assets/images/about-1.jpg" alt="" />
                        </div>
                        <div className="about-inner-content">
                            <img src="" alt="" />
                            <p>
                                Mountain Biking Trips
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-image">
                            <img src="assets/images/about-2.jpg" alt="" />
                        </div>
                        <div className="about-inner-content">
                            <img src="" alt="" />
                            <p>
                                Mountain Biking Trips
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-image">
                            <img src="assets/images/about-3.jpg" alt="" />
                        </div>
                        <div className="about-inner-content">
                            <img src="" alt="" />
                            <p>
                                Adventure
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;