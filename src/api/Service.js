import Api from './Api';

const url = "http://www.mapquestapi.com/directions/v2/route?key=";
const key = "JucRCVHPRDckBXAJ1J2mCG9fYJsrYrfk";
const getDistanceBetweenTwoCities = (currentCity, newCity) => {
    return Api.get(`${url}${key}&from=${currentCity}&to=${newCity}`);
};

// export
const serviceApi = {
    getDistanceBetweenTwoCities,

}
export default serviceApi;