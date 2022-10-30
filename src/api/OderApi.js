import Api from './Api';

const url = "/orders";

const getOrderInfo = (customerId) => {
    const requestParams = {
        customerId
    }

    return Api.get(`${url}`, { params: requestParams });
};
const payment = (id,data) => {
    const body={
        ...data
    }
    return Api.put(`${url}/${id}`,body);
};
// export
const orderApi = { getOrderInfo ,payment }
export default orderApi;