import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import validator from 'validator'
function SignUpForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [profilePicture, setProfilePicture] = useState('')
  const [errors, setErrors] = useState([]);

  async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  const validateEmail = () => {return validator.isEmail(email) }
  const validatePasswordsMatch = () => { return password === confirmPassword ? true : false;}
  const validateNames = () => { return firstName !== "First name" && lastName !== "Last name"}
  const validateProfilePicture = () => { return profilePicture !== null}
  const setDisabled = (e) => {
      if (validateEmail() && validatePasswordsMatch() && validateNames() && validateProfilePicture()) {
          return false;
          
      }else {
          console.log("Hiiii")
          return true;
      }
  }
  const handleSubmit = (e) => {
      console.log("GHREHGEHGEH")
    //e.preventDefault();
    setErrors([]);
    console.log("AHAHSAHFSHS");
    console.log({firstName, lastName, email, password, profilePicture})
    sleep(10000000000)
    return dispatch(sessionActions.signUp({firstName, lastName, email, password, profilePicture    })).catch(
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
      <label>
          First Name
        <input
        className="modal-input-signup-login"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
        <br />

      <label className="modal-label-signup-login">
        Last Name
        <input
        className="modal-input-signup-login"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
      </label>



      <label className="modal-label-signup-login">
        Email
        <input
        className="modal-input-signup-login"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => { setPassword(e.target.value);}}
          required
        />
      </label>
      <br></br>

      <label className="modal-label-signup-login">
        Confirm Password
        <input
          className="modal-input-signup-login"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br></br>

      <label className="modal-label-signup-login">
        Profile Picture uRL
        <input
          className="modal-input-signup-login"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          required
        />
      </label>
      <br></br>
      <button className="modal-input-signup-login" id="loginbtn"  type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
