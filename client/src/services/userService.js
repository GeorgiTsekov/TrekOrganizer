const url = 'https://localhost:44385/identity';

export const loginUser = (credentials) => {
    return fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => {
        response.json()
          .then((result) => {
            console.warn("result", result);
            localStorage.setItem('login', JSON.stringify({
              login: true,
              token: result.token
            }))
          })
      })
  }