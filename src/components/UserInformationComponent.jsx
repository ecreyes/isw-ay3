import React from "react";

import one from "../assets/doctor1.png";
import two from "../assets/doctor2.png";

const UserInformationComponent = ({ type, name, age }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          {type === "1" &&
            <img src={one} className="card-img" alt="type of doctor" />
          }
          {type === "2" &&
            <img src={two} className="card-img" alt="type of doctor" />
          }
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Nombre: {name}</h5>
            <p className="card-text">Edad: {age}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformationComponent