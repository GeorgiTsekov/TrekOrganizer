import * as trekService from '../../services/trekService';
import { useEffect, useState } from 'react';
import '../CreateTrek/CreateTrek.css';

const EditTrek = ({
    match,
    history,
}) => {
    const [trek, setTrek] = useState({});

    let trekId = match.params.trekId;

    useEffect(() => {
        trekService.getOne(trekId)
            .then(res => setTrek(res));
    }, [match]);

    const onEditTrekSubmitHandler = (e) => {
        e.preventDefault();
        
        const {category, location, startDate, endDate, description, imageURL} = e.target;
        let updatedTrek = {...trek, category: category.value, location: location.value, startDate: startDate.value, endDate: endDate.value, description: description.value, imageURL: imageURL.value};
        trekService.edit(match.params.trekId, updatedTrek)
            .then(() => {
                history.push(`/treks/details/${trekId}`);
            });
    }

    return (
        <form className="create-trek" onSubmit={onEditTrekSubmitHandler}>
            <div className="form-label-group">
                <select className="form-control" name="category">
                    <option>{trek.category}</option>
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
                <input type="text"name="startDate" className="form-control" placeholder="StartDate" required="" defaultValue={trek.startDate} />
            </div>

            <div className="form-label-group">
                <input type="text"name="endDate" className="form-control" placeholder="EndDate" required="" defaultValue={trek.endDate} />
            </div>

            <div className="form-label-group">
                <textarea type="text" name="description" className="form-control" placeholder="Description" required="" defaultValue={trek.description}></textarea>
            </div>

            <div className="form-label-group">
                <input type="text" name="imageURL" className="form-control" placeholder="Image" required="" autofocus="" defaultValue={trek.imageURL} />
            </div>

            <button className="btn btn-lg btn-dark btn-block">Edit the trek</button>
        </form>
    );
}

export default EditTrek;