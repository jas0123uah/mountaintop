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
      setErrors(data.errors);
    }
    history.push("/profile/getaways/")
    
  };

  return (
    <form onSubmit={onLogin}>
      <div className="center">
      <ul>
        {errors.length ? <li className="invalidLogin">Error: Invalid login credentials</li> : null}
      </ul>
      <label id="usernameInputLabel">
        Username or Email
        <input
          type="text"
          value={credential}
          id="usernameInput"
          onChange={(e) => {setCredential(e.target.value)}}
          required
        />
      </label>
      <br></br>
      <label id="passwordInputLabel" >
        Password
        <input
          id="passwordInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <input id='loginbttn' type="submit" value="Log in"  />



      </div>
    </form>
  );
}

export default LoginModalForm;
