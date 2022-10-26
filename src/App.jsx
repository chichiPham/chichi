import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import "../src/pricing/pricing.css";
import HomeContainer from "./pages/homeContainer.jsx";
import TopMenu from "./pages/TopMenu";
import ServiceRegister from "./routes/register/service-register.component";
import Service from "./routes/services/service.component";
import SignIn from "./routes/sign-in/sign-in.component";
import storage from "./storage/storage";
import {useSelector} from "react-redux";

const App = () => {
  const isAuth = storage.getToken() !== null && storage.getToken() !== undefined;
  const token = useSelector(state => state.logInUser.token)

  console.log("render App. isAuth: " + isAuth);
  return (
    <>
      <Routes>
        <Route path="/" element={ <TopMenu />}>
          <Route index element={<HomeContainer />} />
          <Route path='register/*' element={<ServiceRegister />} />
          {token && <Route path='service' element={<Service />} />}
          {/*{ isAuth && <Route path='service' element={<Service />} />}*/}
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
