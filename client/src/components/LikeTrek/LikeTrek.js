import { useEffect, useState } from 'react';
import axios from 'axios';

function LikeTrek(props){
    const [trek, setTrek] = useState({});

    let trekId = props.match.params.trekId;

    const onEditTrekSubmitHandler = (e) => {
        e.preventDefault();
        
        let updatedTrek = { ...trek, likes: trek.likes };

        axios.put(`treks/like`, updatedTrek)
            .then(res => {
                this.setTrek(res.updatedTrek)
            })
            .catch(error => { console.log(error.data) })
            .then(() => {
                props.history.push(`/treks/${trekId}`);
            });
    }

    return (
        <form className="create-trek" onSubmit={onEditTrekSubmitHandler}>

            <button className="btn btn-lg btn-dark btn-block">Like the trek</button>
        </form>
    );
}

export default LikeTrek;