import axios from 'axios';

function DeleteTrek(props){
    let trekId = props.match.params.trekId;

    const onDeleteTrekSubmitHandler = (e) => {
        e.preventDefault();

        axios.delete(`treks/${trekId}`)
            .then(res => {
                console.log(res)
            })
            .catch(error => { console.log(error.data) })
            .then(() => {
                props.history.push('/categories/All');
            });
    }

    return (
        <form className="create-trek" onSubmit={onDeleteTrekSubmitHandler}>

            <button className="btn btn-lg btn-dark btn-block">You want to Delete this trek?</button>
        </form>
    );
}

export default DeleteTrek;