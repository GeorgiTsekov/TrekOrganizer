import axios from 'axios';

const DeleteTrek = ({
    history,
    match
}) => {
    let trekId = match.params.trekId;

    const onDeleteTrekSubmitHandler = (e) => {
        e.preventDefault();

        axios.delete(`treks/${trekId}`)
            .then(res => {
                console.log(res)
            })
            .catch(error => { console.log(error.data) })
            .then(() => {
                history.push('/categories/All');
            });
    }

    return (
        <form className="create-trek" onSubmit={onDeleteTrekSubmitHandler}>

            <button className="btn btn-lg btn-dark btn-block">You want to Delete this trek?</button>
        </form>
    );
}

export default DeleteTrek;