import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setName(`${firstName} ${lastName}`); 
    console.log(`Submitted Name: ${firstName} ${lastName}`);
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  return (
    <div className="App">
      <h2>Full Name Display</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", alignItems: "center", gap: "10px" }}
      >
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter your First Name"
            value={firstName}
            onChange={inputEvent}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Enter your Last Name"
            value={lastName}
            onChange={inputEvent}
            required
          />
        </label>
        <button type="submit" style={{ width: "100px" }}>
          Submit
        </button>
      </form>
      {name && <h4>Full Name: {name}</h4>}
    </div>
  );
}

export default App;
