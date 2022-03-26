import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("Peter");
  const [mail, setMail] = useState("peter@gmail.com");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { name, mail, pass };

    console.log(blog);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label>Email:</label>
        <input
          type="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <br />

        <label>Password: </label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />

        <button>Submit</button>

        <p>Name: {name}</p>
        <p>Email: {mail}</p>
        <p>Password: {pass}</p>
      </form>
    </>
  );
}

export default App;
