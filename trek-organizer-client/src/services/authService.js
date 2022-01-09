import { BASE_URL } from "../constants";
import *as request from "./requester";

const baseUrl = `${BASE_URL}/identity`;

export const login = async (authData) => request.post(`${baseUrl}/login`, authData);

export const register = async (authData) => {
    fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(authData)
    })
        .then(res => {
            if (res.ok) {
                return res.ok
            } else {
                let jsonData = res.json();
                throw jsonData;
            }
        })
}
export const getUser = () => {
    let userName = localStorage.getItem('userName');

    return userName;
}

export const isAuthenticated = () => {
    return Boolean(getUser().userName);
}