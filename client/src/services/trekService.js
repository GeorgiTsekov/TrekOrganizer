import api from './api';

export const getAll = (category = '') => {
    let currentCategory = category;

    if (`?category=${category}` && category != 'All') {
        currentCategory = '';
    }

    return fetch(`http://localhost:5000/treks${currentCategory}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};