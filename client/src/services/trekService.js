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

export const create = (location, startDate, endDate, description, imageURL) => {
    let trek = {
        location,
        startDate,
        endDate,
        description,
        imageURL,
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trek)
    });
}