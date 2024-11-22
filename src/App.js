import React, { useState, useEffect } from "react";

function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setName(`${firstName} ${lastName}`); 
    console.log(`Submitted Name: ${firstName} ${lastName}`);
  };



  return (
    <div className="App">
      <h2>Full Name Display</h2>
      <form
        onSubmit={handleSubmit} 
        style={{ display: "grid", alignItems: "center", gap: "10px" }}
      >
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your First Name"
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter your Last Name"
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{ width: "100px" }}>
          Submit
        </button>
      </form>
      <h4>Full Name: {name}</h4>
    </div>
  );
}

export default App;
