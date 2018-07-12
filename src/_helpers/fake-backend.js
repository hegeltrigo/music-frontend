export function configureFakeBackend() {
    let users = [{ id: 1, email: 'hegeltrigo@gmail.com', password: 'dianapaula1', created_at: 'creado en', updated_at: 'modificado en' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/sign_in') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.user.email && user.password === params.user.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            email: user.email,
                            created_at: user.created_at,
                            updated_at: user.updated_at,
                            token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTMxMzUyOTk1LCJleHAiOjE1MzE0MzkzOTUsImp0aSI6ImNmMmIyYzQ3LTJjNTAtNDhhZi1iY2E1LWE3M2M1ZTE3Mzg1OSJ9.2uSwO-8LBd7P2DeNbtADZwzbcEWxhW7YIVDM141oHzA'
                        };
                        resolve({ ok: true, json: () => Promise.resolve(responseJson) });
                    } else {
                        // else return error
                        reject('Email or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTMxMzUyOTk1LCJleHAiOjE1MzE0MzkzOTUsImp0aSI6ImNmMmIyYzQ3LTJjNTAtNDhhZi1iY2E1LWE3M2M1ZTE3Mzg1OSJ9.2uSwO-8LBd7P2DeNbtADZwzbcEWxhW7YIVDM141oHzA') {
                        resolve({ ok: true, json: () => Promise.resolve(users) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
