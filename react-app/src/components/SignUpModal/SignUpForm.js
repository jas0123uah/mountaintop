import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUp } from '../../store/session';
import {loadGetaways} from '../../store/getaways'
import {authenticate, checkForEmail} from '../../store/session'
import {useHistory} from 'react-router-dom';
import {checkURL} from '../../utils/helperFunctions'
import $ from 'jquery'
function SignUpForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [img1, setImg1] = useState('')
  const [validImg1, setValidImg1]= useState(true)
  const [img1Preview, setImg1Preview] = useState('')
  const [savedImg1File, setSavedImg1File] = useState('')
  const [savedImg1Preview, setSavedImg1Preview] = useState('')
  const [errors, setErrors] = useState([]);
  const handleImg1Click = () => {
    $('#img1Upload').trigger('click')

  }
  const validateEmail = (email) => {
    let loweremail = email.toLowerCase()
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return emailRegex.test(loweremail);
};
const img1IsValid = (img) => {
    if(!img.target.value.length){
      setValidImg1(true)
      return
    }
    if (img.target.value.length && checkURL(img.target.value)) {
      setValidImg1(true)
      return 
    }
    setValidImg1(false)
  }
  const handleSetImg1 = (e) => {
        let file = e.target.files[0];

        setImg1(e.target.files[0]);
        if (file) {
            setSavedImg1File(file);

            file = URL.createObjectURL(file);
            setImg1Preview(file);
            setSavedImg1Preview(file)
        } else {
            setImg1(savedImg1File);
            setImg1Preview(savedImg1Preview);
        }
    }
  useEffect(()=> {
    const user = {email, password, confirmPassword, firstName, lastName, img1}
    const errors = [];
    if (!email) errors.push('Please enter an e-mail.');

    if (!password.length) errors.push('Please enter a password.');
    if (password.length < 5) errors.push('Password must be 5 characters.')

    if (!confirmPassword.length) errors.push('Please confirm your password.');

    if (password !=confirmPassword) errors.push("Passwords don't match.");

    if (firstName.length > 50)
    errors.push('First name must be fewer than 50 characters.')

    if (lastName.length > 50) errors.push('Last name must be fewer than 50 characters.')


    if (!validateEmail(email)) {
      errors.push("Please enter a valid email address.")
    }
    
    
    if (!firstName.length) errors.push('Please enter your first name.');

    if (!lastName.length) errors.push('Please enter your last name.');

    if (!img1) errors.push('Please upload a profile picture.');

   
    
    
    setErrors(errors);
  }, [email, password, confirmPassword, firstName, lastName, img1, validImg1])


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
    const formData = new FormData()
      formData.append("firstName", firstName)
      formData.append("lastName", lastName)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("profilePicture", img1)
    const data = await dispatch(signUp(formData))
    if (data && data.errors){ 
      setErrors(data.errors)

    ;}
        
    await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push(`/profile/getaways/`))
    }
  };

  return (
    <div className='formWrapper' id="signup">

    <form onSubmit={onSignUp} className="signUpFlex">
      <ul className="formErrors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="signup-inputs">

      <label className="modal-label-signup-login">
          First Name
        <input
        className="modal-input-signup-login"
        id="firstNameField"
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
          id="lastNameField"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
        <br />
      <label className="modal-label-signup-login">
        Email
        <input
        className="modal-input-signup-login"
          type="text"
          id="emailField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br></br>
      <label className="modal-label-signup-login">
        Password
        <input
        id="passwordField"
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
        id="confirmPasswordField"
          className="modal-input-signup-login"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br></br>

      <div className="getawayImgFields" id="signUpImage">
        
        <i class="fa fa-camera" onClick={handleImg1Click}></i>
        <input type="file" id="img1Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg1(e)}} />
        {img1 ? <img src={img1Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>
      <br></br>
      </div>
      <button className="modal-input-signup-login" id="signupbtn" disabled={errors.length ? true : false}  type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignUpForm;
