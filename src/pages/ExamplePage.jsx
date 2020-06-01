import React, { useState } from "react";

//components
import NavbarComponent from "../components/NavbarComponent";
import UserInformationComponent from "../components/UserInformationComponent";

const ExamplePage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("1");

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h2>Example page</h2>
        <hr />
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="email"
                className="form-control form-control-sm"
                id="name"
                name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="number"
                className="form-control form-control-sm"
                id="age"
                name="age" />
            </div>
            <div className="form-group">
              <label htmlFor="doctor">Type</label>
              <select id="doctor" value={type} onChange={(e) => setType(e.target.value)} className="form-control">
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-6">
            <UserInformationComponent type={type} name={name} age={age} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamplePage;