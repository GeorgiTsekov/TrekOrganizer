import { BASE_URL } from '../constants';
import *as request from './requester';

const baseUrl = `${BASE_URL}/treks`;

export const getAll = () => request.get(`${baseUrl}`);

export const getMySavedTrips = () => request.get(`${baseUrl}/mySavedTrips`);

export const getAllSavedTrips = () => request.get(`${baseUrl}/allSavedTrips`);

export const deleteSavedTrip = (carId, tripId) => request.deleteTrek(`${baseUrl}/${carId}/${tripId}/delete`);

export const available = async (carData) => request.post(`${baseUrl}/available`, carData);

export const getOne = async (trekId) => request.get(`${baseUrl}/${trekId}`);

export const create = async (trekData) => request.post(`${baseUrl}/create`, trekData);

export const likes = async (trekId) => request.put(`${baseUrl}/${trekId}/like`);

export const rent = async (carData, carId) => request.patch(`${baseUrl}/${carId}/addTenant`, carData);

export const edit = async (trekData, trekId) => request.put(`${baseUrl}/${trekId}/edit`, trekData);

export const deleteTrek = async (trekId) => request.deleteTrek(`${baseUrl}/${trekId}`);
