import Api from './Api';

const url = "/orders";

const getOrderInfo = (customerId) => {
    const requestParams = {
        customerId
    }

    return Api.get(`${url}`, { params: requestParams });
};

// export
const orderApi = { getOrderInfo }
export default orderApi;