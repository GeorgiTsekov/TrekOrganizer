import './Trek.css'

const Trek = ({
    content,
    imageURL,
    organizer
}) => {
    return (
        <div class="trek">
            <a href="#" class="card overflow-hidden treksPlaceholder trek-details">
                <div class="card-body">
                    <p class="card-text">
                        {content}
                    </p>
                </div>
                <img class="card-image" src={imageURL} alt="Card image cap"></img>
            </a>
        </div>
    );
}

export default Trek;