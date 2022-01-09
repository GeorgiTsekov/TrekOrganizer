import { Link } from "react-router-dom";

const Trails = () => {
    return (
        <section className="trails">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">

                        <div className="accordion1">
                            <div className="banner-heading">
                                <h2>Trails</h2>
                            </div>
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <Link role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Section 1
                                            </Link>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            <div className='panel-pic'>
                                                <p>
                                                    Dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla augue. Maecenas in lectus lorem. In et accumsan mi. Aenean vestibulum nisl eu arcu viverra iaculis. In hac habitasse platea dictumst. In vehicula diam et mauris imperdiet aliquet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Section 2
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <div className='panel-pic'>
                                                    <p>
                                                        Dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla augue. Maecenas in lectus lorem. In et accumsan mi. Aenean vestibulum nisl eu arcu viverra iaculis. In hac habitasse platea dictumst. In vehicula diam et mauris imperdiet aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Section 3
                                                    </Link>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <div className='panel-pic'>
                                                        <p>
                                                            Dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla augue. Maecenas in lectus lorem. In et accumsan mi. Aenean vestibulum nisl eu arcu viverra iaculis. In hac habitasse platea dictumst. In vehicula diam et mauris imperdiet aliquet.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingFour">
                                                    <h4 className="panel-title">
                                                        <Link className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" to="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                                            Section 4
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <div className='panel-pic'>
                                                        <p>
                                                            Dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla augue. Maecenas in lectus lorem. In et accumsan mi. Aenean vestibulum nisl eu arcu viverra iaculis. In hac habitasse platea dictumst. In vehicula diam et mauris imperdiet aliquet.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="trail-img">
                            <img src="/images/trail.jpg" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Trails;