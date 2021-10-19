import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const [isPressed, setIsPressed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUsingGoogle, signInUsingEmail, setUserInfo, processLogin } =
    useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  const handleForSignUp = () => {
    isPressed ? setIsPressed(false) : setIsPressed(true);
  };
  const onSubmit = (data) => {
    isPressed
      ? signInUsingEmail(data.email, data.password).then((result) => {
          setUserInfo(data.name, data.imageLink);
          history.push(redirect_uri);
        })
      : processLogin(data.email, data.password).then((result) => {
          history.push(redirect_uri);
        });
  };
  return (
    <div className="padding-top">
      <div className="authentication-Container">
        <div className="authentication-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            {isPressed && (
              <div>
                <input
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="errors">Name is required!!</span>
                )}
                <br />
              </div>
            )}
            {isPressed && (
              <div>
                <input
                  placeholder="Enter Your Image Link"
                  {...register("imageLink", { required: true })}
                />
                <br />
                {errors.imageLink && (
                  <span className="errors">Image is required!!</span>
                )}
                <br />
              </div>
            )}
            <div>
              <input
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <br />
              {errors.email?.message && (
                <span className="errors">{errors.email?.message}</span>
              )}
            </div>
            <br />
            <div>
              <input
                name="password"
                placeholder="Enter Your Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                    message:
                      "Minimum eight characters, at least numeric character, one lowercase letter, one uppercase letter and one special character",
                  },
                })}
              />
              <br />
              {errors.password?.message && (
                <span className="errors">{errors.password?.message}</span>
              )}
            </div>
            <br />

            {isPressed ? (
              <Button type="submit" variant="primary">
                Sign Up
              </Button>
            ) : (
              <Button type="submit" variant="primary">
                Login
              </Button>
            )}
          </form>
          <div>--------- or ---------</div>
          <Button
            className="mb-3"
            onClick={handleGoogleLogin}
            type="submit"
            variant="primary"
          >
            SignIn with Google
          </Button>
          {isPressed ? (
            <p>
              Already have an account?{" "}
              <Button
                className="ms-3"
                onClick={handleForSignUp}
                variant="primary"
              >
                Login
              </Button>
            </p>
          ) : (
            <p>
              Do not have an account?{" "}
              <Button
                className="ms-3"
                onClick={handleForSignUp}
                variant="primary"
              >
                Sign Up
              </Button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
