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
    dispatch(sessionActions.login( credential, password )).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    window.location.reload()
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="modal-label-signup-login" >
        Username or Email
        <input
        className="modal-input-signup-login"
          id="login"
          type="text"
          value={credential}
          onChange={(e) => {setCredential(e.target.value)}}
          required
        />
      </label>
      <br></br>
      <label className="modal-label-signup-login">
        Password
        <input
        id="login"
          className="modal-input-signup-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <input type="submit" className={`modal-input-signup-login modal-input-signup-login-submit` } id="login" value="Log in" />
      {/* <button className="modal-input-signup-login" id="loginbtn" type="submit">Log In</button> */}
    </form>
  );
}
export default LoginForm;
