import userEvent from '@testing-library/user-event';
import axios from 'axios';

const url = 'https://localhost:44385/treks';

export const getAll = (category = '') => {
    let currentCategory = (category && category != 'All') ? `?categoryName=${category}` : '';
    return fetch(url + currentCategory)
        .then(res => res.json())
        .catch(error => console.log(error));
}



export const getOne = (trekId) => {
    return axios.get(`treks/${trekId}`)
        .then(res => {
            this.setState(res.data);
        });
}

export const create = (category, location, startDate, endDate, description, imageUrl) => {
    let trek = {
        category,
        location,
        startDate,
        endDate,
        description,
        imageUrl,
        // organizer: userEvent.userName
        // createdOn: Date.UTC(),
    }
    return axios.post(`treks`, trek)
        .then(res => {
            console.log(res)
            console.log(trek)
            this.setState(res.trek);
        })
        .catch(error => { console.log(error.data) });
}

export const edit = (trekId, trek) => {
    return fetch(`${url}/${trekId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trek)
    });

}

export const like = (trekId, incrementedLikes) => {
    return fetch(`${url}/${trekId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: incrementedLikes })
    });
}