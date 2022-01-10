import { Link } from 'react-router-dom';

const Trek = (
    { trek }
) => {
    return (
        <div className="col-md-9 col-sm-8">
            <div className="post_block">
                <div className="col-md-12">
                    <div className="col-md-5">
                        <img src={trek.imageUrl} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>{trek.location}</h2>

                        <p>{trek.description}</p>
                        <div className="catageory">
                            <ul>
                                <li><Link to="#">StartDate: {trek.startDate}</Link></li>
                                <li><Link to="#">EndDate: {trek.endDate}</Link></li>
                                <li><Link to="#">Organizer: {trek.organizerName}</Link></li>
                                {/* <li><Link to="#">3 Comments</Link></li> */}
                            </ul>
                            <div className="clearfix"></div>
                        </div>

                        <Link to={`/treks/${trek.id}`} className="read_more">Read More</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Trek;