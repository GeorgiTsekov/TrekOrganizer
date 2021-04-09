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

export const create = (category, location, startDate, endDate, description, imageURL) => {
    let trek = {
        category,
        location,
        startDate,
        endDate,
        description,
        imageURL,
        likes: 0,
        organizer: 'Pesho',
        createdOn: Date.UTC(),
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trek)
    });
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
