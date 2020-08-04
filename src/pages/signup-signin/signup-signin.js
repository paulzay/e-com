import React from "react";
import "./signup-signin.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/signup";
const SignupSigninPage = () => (
  <div className="signup-signin">
    <SignIn />
    <SignUp />
  </div>
);

export default SignupSigninPage;
