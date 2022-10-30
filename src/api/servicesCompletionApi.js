import Api from './Api';

const url = "/services-completion";

export const serviceCompletion = (orderId) => {
    const requestParams = {
        orderId
    }

    return Api.get(`${url}`, { params: requestParams });
};

//http://localhost:8080/api/v1/services-completion?orderId=2
// export
