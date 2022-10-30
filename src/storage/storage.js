const isRememberMe = () => {
    if (localStorage.getItem("isRememberMe") !== null && localStorage.getItem("isRememberMe") !== undefined) {
        // convert string to boolean and return result
        return JSON.parse(localStorage.getItem("isRememberMe"));
    }
    return true;
}

const setRememberMe = (isRememberMe) => {
    localStorage.setItem("isRememberMe", isRememberMe);
}

const setItem = (key, value) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
}

const removeItem = (key) => {
    if (isRememberMe()) {
        localStorage.removeItem(key);
    } else {
        sessionStorage.removeItem(key);
    }
}

const setToken = (token) => {
    setItem("token", token);
};

const removeToken = () => {
    removeItem("token");
};

const getToken = () => {
    return getItem("token");
}

const isAuth = () => {
    return getToken() !== null && getToken() !== undefined;
}

const setUserInfo = (id, email, phone, fullname, role, status, avatarUrl) => {
    setItem("id", id);
    setItem("email", email);
    setItem("phone", phone);
    setItem("fullname", fullname);
    setItem("role", role);
    setItem("status", status);
    setItem("avatarUrl", avatarUrl);

}

const setOrderInfo = (
    orderId,
    currentCity,
    newCity,
    movingDate,
    isHasApartmentAlready,
    distance,
    paymentStatus) => {

    setItem("orderId", orderId);
    setItem("currentCity", currentCity);
    setItem("newCity", newCity);
    setItem("movingDate", movingDate);
    setItem("isHasApartmentAlready", isHasApartmentAlready);
    setItem("distance", distance);
    setItem("paymentStatus", paymentStatus);

}
const getOrderInfoToJson = () => {
    return {
        "orderId": getItem("orderId"),
        // "plan": getItem("plan"),
        "currentCity": getItem("currentCity"),
        "newCity": getItem("newCity"),
        "movingDate": getItem("movingDate"),
        "isHasApartmentAlready": getItem("isHasApartmentAlready"),
        "distance": getItem("distance"),
        "paymentStatus": getItem("paymentStatus")

    };
}
const removeOrderInfo = () => {
    removeItem("orderId");
    // removeItem("plan");
    removeItem("currentCity");
    removeItem("newCity");
    removeItem("movingDate");
    removeItem("isHasApartmentAlready");
    removeItem("distance");
    removeItem("paymentStatus");
};
const getUserInfoToJson = () => {
    return {
        "id": getItem("id"),
        "email": getItem("email"),
        "phone": getItem("phone"),
        "fullname": getItem("fullname"),
        "role": getItem("role"),
        "status": getItem("status"),
        "avatarUrl": getItem("avatarUrl")

    };
}

const removeUserInfo = () => {
    removeItem("id");
    removeItem("email");
    removeItem("phone");
    removeItem("fullname");
    removeItem("role");
    removeItem("status");
    removeItem("avatarUrl");
};

// export
const storage = {
    setItem,
    getItem,
    setOrderInfo,
    getOrderInfoToJson,
    removeOrderInfo,
    isRememberMe,
    setRememberMe,
    setToken,
    getToken,
    removeToken,
    isAuth,
    setUserInfo,
    getUserInfoToJson,
    removeUserInfo
};
export default storage;
// const setToken = token => {
//     localStorage.setItem("token", token);
// }
//
// const getToken = () => (
//     localStorage.getItem("token")
// )
//
// const setUserInfo = (username, email, firstName, lastName, role, status) => {
//     localStorage.setItem("username", username);
//     localStorage.setItem("email", email);
//     localStorage.setItem("firstName", firstName);
//     localStorage.setItem("lastName", lastName);
//     localStorage.setItem("role", role);
//     localStorage.setItem("status", status);
// }
//
// const getUserInfoToJson = () => {
//     return {
//         "username": localStorage.getItem("username"),
//         "email": localStorage.getItem("email"),
//         "firstName": localStorage.getItem("firstName"),
//         "lastName": localStorage.getItem("lastName"),
//         "role": localStorage.getItem("role"),
//         "status": localStorage.getItem("status"),
//     }
// }
//
// const storage = {setToken, getToken, setUserInfo, getUserInfoToJson};
// export default storage;