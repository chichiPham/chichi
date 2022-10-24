import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/pricing/pricing.css";
import HomeContainer from "./pages/homeContainer.jsx";
import TopMenu from "./pages/TopMenu";
import ServiceRegister from "./routes/register/service-register.component";
import Service from "./routes/services/service.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <TopMenu />}>
          <Route index element={<HomeContainer />} />
          <Route path='register/*' element={<ServiceRegister />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='service' element={<Service />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
