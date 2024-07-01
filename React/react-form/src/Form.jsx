import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("");
  // let [username, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handelNameChange = (e) => {
  //     setFullName(e.target.value);
  // }

  // let handelUsername = (e) => {
  //     setUsername(e.target.value);
  // }

  let handelInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="fullname">Full Name</label>
      &nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter full name"
        value={formData.fullName}
        id="fullname"
        name="fullName"
        onChange={handelInputChange}
      />
      <br /> <br />
      <label htmlFor="username">Username</label>
      &nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter username"
        value={formData.username}
        id="username"
        name="username"
        onChange={handelInputChange}
      />
      <br /> <br />
      <label htmlFor="password">Password</label>
      &nbsp;&nbsp;
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handelInputChange}
      />
      <br /> <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
