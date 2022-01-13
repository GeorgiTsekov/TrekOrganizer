import { BASE_URL } from '../constants';
import *as request from './requester';

const baseUrl = `${BASE_URL}/treks`;

export const getAll = () => request.get(`${baseUrl}`);

export const getMySavedTrips = () => request.get(`${baseUrl}/mySavedTrips`);

export const getAllSavedTrips = () => request.get(`${baseUrl}/allSavedTrips`);

// export const deleteSavedTrip = (carId, tripId) => request.deleteTrek(`${baseUrl}/${carId}/${tripId}/delete`);

export const available = async (carData) => request.post(`${baseUrl}/available`, carData);

export const getOne = async (trekId) => request.get(`${baseUrl}/${trekId}`);

export const create = async (trekData) => request.post(`${baseUrl}`, trekData);

export const likes = async (trekId) => {
    let result = fetch(`${baseUrl}/like/${trekId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.ok
            } else {
                let jsonData = res.json();
                throw jsonData;
            }
        })

    return result;
}

export const rent = async (carData, carId) => request.patch(`${baseUrl}/${carId}/addTenant`, carData);

export const edit = async (trekData, trekId) => request.put(`${baseUrl}/${trekId}/edit`, trekData);

export const deleteTrek = async (trekId) => {
    fetch(`${baseUrl}/${trekId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.ok
            } else {
                let jsonData = res.json();
                throw jsonData;
            }
        });
}

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw userItem;
        }

        let user = JSON.parse(userItem)

        return user.token;
    } catch (error) {
        console.log(error);
    }
}