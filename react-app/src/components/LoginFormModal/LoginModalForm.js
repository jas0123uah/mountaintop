import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
function LoginModalForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(credential, password));
    if (data) {
      setErrors(data);
    }
    history.push("/profile")
    
  };

  return (
    <form onSubmit={onLogin}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="modal-label-signup-login">
        Username or Email
        <input
        className="modal-input-signup-login"
        id="USERNAME"
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
          className="modal-input-signup-login"
          id="PASSWORD"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <input type="submit" value="Log in" id="LOGINBUTTON" />
      {/* <button className="modal-input-signup-login" id="loginbtn" type="submit">Log In</button> */}
    </form>
  );
}

export default LoginModalForm;
