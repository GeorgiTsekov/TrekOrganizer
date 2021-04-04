import './Trek.css';


const Trek = ({
    content,
    imageURL,
    category,
}) => {
    return (
        <div className="trek">
            <a href="#" className="card overflow-hidden treksPlaceholder trek-details">
                <div className="card-body">
                    <p className="card-text">
                        {content}
                    </p><p className="card-text">
                        {category}
                    </p>
                </div>
                <img className="card-image" src={imageURL} alt="Card image cap"></img>
            </a>
        </div>
    );
}

export default Trek;