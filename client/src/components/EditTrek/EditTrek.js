import { useEffect, useState } from 'react';
import '../CreateTrek/CreateTrek.css';
import axios from 'axios';

function EditTrek(props){
    const [trek, setTrek] = useState({});

    let trekId = props.match.params.trekId;

    useEffect(() => {
        axios.get(`treks/${trekId}`)
            .then(res => setTrek(res.data))
            .catch(error => { console.log(error.response.data.errors) })
    }, [props.match]);

    const onEditTrekSubmitHandler = (e) => {
        e.preventDefault();

        const { categoryName, location, startDate, endDate, description, imageUrl } = e.target;
        let updatedTrek = { ...trek, categoryName: categoryName.value, location: location.value, startDate: startDate.value, endDate: endDate.value, description: description.value, imageUrl: imageUrl.value };

        axios.put(`treks/${trekId}`, updatedTrek)
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
            <div className="form-label-group">
                <select className="form-control" name="categoryName">
                    <option>{trek.categoryName}</option>
                    <option>Hiking</option>
                    <option>Walking</option>
                    <option>Running</option>
                    <option>Biking</option>
                    <option>Lift</option>
                    <option>Skiing</option>
                    <option>Rafting</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="form-label-group">
                <input type="text" name="location" className="form-control" placeholder="Location" required="" autofocus="" defaultValue={trek.location} />
            </div>

            <div className="form-label-group">
                <input type="text" name="startDate" className="form-control" placeholder="StartDate" required="" defaultValue={trek.startDate} />
            </div>

            <div className="form-label-group">
                <input type="text" name="endDate" className="form-control" placeholder="EndDate" required="" defaultValue={trek.endDate} />
            </div>

            <div className="form-label-group">
                <textarea type="text" name="description" className="form-control" placeholder="Description" required="" defaultValue={trek.description}></textarea>
            </div>

            <div className="form-label-group">
                <input type="text" name="imageUrl" className="form-control" placeholder="Image" required="" autofocus="" defaultValue={trek.imageUrl} />
            </div>

            <button className="btn btn-lg btn-dark btn-block">Edit the trek</button>
        </form>
    );
}

export default EditTrek;