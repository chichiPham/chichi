import Api from './Api';

const url = "http://www.mapquestapi.com/directions/v2/route?key=";
const key = "JucRCVHPRDckBXAJ1J2mCG9fYJsrYrfk";
const getDistanceBetweenTwoCities = (currentCity, newCity) => {
    return Api.get(`${url}${key}&from=${currentCity}&to=${newCity}`);
};
const aprtmentDataUrl = "https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20151&to=20152&area=";

export const getApartmentDataByCityCode = (cityCode) => {
    return Api.get(`${aprtmentDataUrl}${cityCode}`);
};

// export
const serviceApi = {
    getDistanceBetweenTwoCities,
    getApartmentDataByCityCode

}
export default serviceApi;