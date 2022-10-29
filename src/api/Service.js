import Api from './Api';

const url = "https://www.distance24.org/route.json?stops=";

const getDistanceBetweenTwoCities = (currentCity, newCity) => {
    return Api.get(`${url}${currentCity}|${newCity}`);
};

// export
const serviceApi = {
    getDistanceBetweenTwoCities,

}
export default serviceApi;