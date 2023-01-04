import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { login } from "../../store/slices/Auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);

  const {
    inputValue: emailValue,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInValid,
    inputWasTouched: emailWasTouched,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    inputValue: passwordValue,
    inputIsValid: passwordIsValid,
    inputIsInvalid: passwordIsInValid,
    inputWasTouched: passwordWasTouched,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim().length >= 6);

  const toggleLoginHandler = (event) => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    emailBlurHandler();
    passwordBlurHandler();

    if (!emailIsValid || !passwordIsValid) {
      return;
    } else {
      let url;
      if (isLogin) {
        url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDC_2k5oPQzhLgosHE3D2EyGykJXBnOjGw";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDC_2k5oPQzhLgosHE3D2EyGykJXBnOjGw";
      }
      const body = {
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      };
      dispatch(login({ url, body }));
    }
    emailReset();
    passwordReset();
  };

  const emailAlertClass = emailIsInValid ? classes.alertClass : "";
  const passwordAlertClass = passwordIsInValid ? classes.alertClass : "";
  return (
    <div className="container">
      <div className={`my-5 mx-auto ${classes["form-content"]}`}>
        <form className={`${classes.form}`} onSubmit={formSubmitHandler}>
          <h2 className={`${classes.heading}`}>{isLogin ? "Login" : "Signup"}</h2>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${emailAlertClass}`}
              id="inputEmail"
              aria-describedby="emailHelp"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={emailValue}
            />
          </div>
          {emailIsInValid && (
            <p className={`alert alert-danger ${classes.alert}`}>
              Email must includes @
            </p>
          )}
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${passwordAlertClass}`}
              id="inputPassword"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={passwordValue}
            />
          </div>
          {passwordIsInValid && (
            <p className={`alert alert-danger mb-2 ${classes.alert}`}>
              Password must be at least 6
            </p>
          )}
          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className={classes.para}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="btn p-0 text-primary" onClick={toggleLoginHandler}>
            {isLogin ? "Signup" : "Login now"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
