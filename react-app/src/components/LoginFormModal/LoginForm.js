import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="modal-label-signup-login">
        Username or Email
        <input
        className="modal-input-signup-login"
          type="text"
          value={credential}
          onChange={(e) => {setCredential(e.target.value); console.log(e.target.value);}}
          required
        />
      </label>
      <br></br>
      <label className="modal-label-signup-login">
        Password
        <input
          className="modal-input-signup-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <input type="submit" value="Log in" />
      {/* <button className="modal-input-signup-login" id="loginbtn" type="submit">Log In</button> */}
    </form>
  );
}

export default LoginForm;
