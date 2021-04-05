import './Trek.css';
import { Link}  from 'react-router-dom';

const Trek = ({
    content,
    imageURL,
    category,
    id,
}) => {
    return (
        <div className="trek">
            <Link to={`/treks/details/${id}`} className="card overflow-hidden treksPlaceholder trek-details">
                <div className="card-body">
                    <p className="card-text">
                        {content}
                    </p><p className="card-text">
                        {category}
                    </p>
                </div>
                <img className="card-image" src={imageURL} alt="Card image cap"></img>
            </Link>
        </div>
    );
}

export default Trek;