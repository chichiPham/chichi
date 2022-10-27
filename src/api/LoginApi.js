import Api from './Api';

const url = "/login";

const login = (email, password) => {
    const requestParams = {
        email,
        password
    }

    return Api.get(`${url}`, { params: requestParams });
};

// export
const loginApi = { login }
export default loginApi;