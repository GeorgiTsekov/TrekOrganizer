import { BASE_URL } from '../constants';
import *as request from './requester';

const baseUrl = `${BASE_URL}/treks`;

export const getAll = () => request.get(`${baseUrl}`);

export const getMySavedTrips = () => request.get(`${baseUrl}/mySavedTrips`);

export const getAllSavedTrips = () => request.get(`${baseUrl}/allSavedTrips`);

export const deleteSavedTrip = (carId, tripId) => request.deleteTrek(`${baseUrl}/${carId}/${tripId}/delete`);

export const available = async (carData) => request.post(`${baseUrl}/available`, carData);

export const getOne = async (carId) => request.get(`${baseUrl}/${carId}`);

export const create = async (carData) => request.post(`${baseUrl}/create`, carData);

export const likes = async (carId) => request.patch(`${baseUrl}/${carId}/like`);

export const rent = async (carData, carId) => request.patch(`${baseUrl}/${carId}/addTenant`, carData);

export const edit = async (carData, carId) => request.patch(`${baseUrl}/${carId}/edit`, carData);

export const deleteTrek = async (carId) => request.deleteTrek(`${baseUrl}/${carId}/delete`);
