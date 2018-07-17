import config from 'config';

export const guestService = {
    getAllLetters
};

function getAllLetters(){
  const requestOptions = {
      method: 'GET'
  };

  return fetch(`${config.apiUrl}/letters`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
