import React, { useState } from "react";
import "./Auth.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { auth } from "../../firebase/config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { Loader } from "../../components";
import { useSelector } from "react-redux";
import { selectPreviousURL } from "../../redux/slice/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const previousURL = useSelector(selectPreviousURL)
  const navigate = useNavigate();

  const redirectUser = () => {
    if(previousURL.includes('cart')) {
    return navigate("/cart")
    }
    navigate('/')
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        toast.success("login Successful...");
        setIsLoading(false);
        // navigate("/");
        redirectUser()
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  //login with google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toast.success("login Successful...");
        // navigate("/");
        redirectUser()
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
       {isLoading && <Loader />}
      <section className="container auth">
        <div className="img">
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="--btn --btn-primary --btn-block">Login</button>
              <div className="links">
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              {" "}
              <FaGoogle color="#fff" />
              Sign in with goole
            </button>
            <span className="register">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
