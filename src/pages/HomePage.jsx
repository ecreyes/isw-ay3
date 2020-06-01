import React from "react";

//components
import NavbarComponent from "../components/NavbarComponent";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid">
        <h1>Mis textos</h1>
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-12 col-sm-12 col-lg-4">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-12 col-sm-12 col-lg-4">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;