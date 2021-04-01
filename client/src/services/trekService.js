import api from './api';

export const getAll = () => {
    return fetch(api.treks)
        .then(res => res.json())
        .catch(err => console.log(`Handled error:${err}`));
};