const url = 'https://localhost:44385/identity';

export const register = (userName, email, password) => {
    let user = {
        userName,
        email,
        password
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export const login = (userName, password) => {
    return fetch(`${url}/${login}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}