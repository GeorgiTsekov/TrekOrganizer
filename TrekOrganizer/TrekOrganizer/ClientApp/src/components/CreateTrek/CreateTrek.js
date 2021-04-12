import * as trekService from '../../services/trekService';
import './CreateTrek.css';

const CreateTrek = ({
    history,
}) => {
    const onCreateTrekSubmitHandler = (e) => {
        e.preventDefault();

        const { categoryName, location, startDate, endDate, description, imageURL } = e.target;

        trekService.create(categoryName.value, location.value, startDate.value, endDate.value, description.value, imageURL.value)
            .then(() => {
                history.push('/categories/All');
            });
    }

    return (
        <form onSubmit={onCreateTrekSubmitHandler} className="create-trek">
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Wish for a new adventure!</h1>
                <p>Fill up the following information!</p>
            </div>
            <div className="form-label-group">
                <select className="form-control" name="categoryName">
                    <option></option>
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
                <input type="text" name="location" className="form-control" placeholder="Location" required="" autofocus="" />
            </div>

            <div className="form-label-group">
                <input type="text" name="startDate" className="form-control" placeholder="StartDate" required="" />
            </div>

            <div className="form-label-group">
                <input type="text" name="endDate" className="form-control" placeholder="EndDate" required="" />
            </div>

            <div className="form-label-group">
                <textarea type="text" name="description" className="form-control" placeholder="Description" required=""></textarea>
            </div>

            <div className="form-label-group">
                <input type="text" name="imageURL" className="form-control" placeholder="Image" required="" autofocus="" />
            </div>

            <button className="btn btn-lg btn-dark btn-block" type="submit">Make a wish =)</button>
        </form>
    );
};

export default CreateTrek;