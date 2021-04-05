const url = 'http://localhost:5000/treks';

export const getAll = (category = '') => {
    let currentCategory = (category && category != 'All') ? `?category=${category}` : '';

    return fetch(url + currentCategory)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (trekId) => {
    return fetch(`${url}/${trekId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}