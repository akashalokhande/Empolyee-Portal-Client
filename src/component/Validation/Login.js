import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import noteContext from "../home/Contex.js/NoteContext";
import { useContext } from "react";
import FormValidation from "./FormValidation";
import axios from "axios";
import HomePage from "../home/HomePage";
import Swal from "sweetalert2";

function Login() {
  const [input, setinput] = useState({
    Email: "",
    password: "",
  });

  const { Email, password } = input;
  const [Message, seterrorMassage] = useState("");
  const [errormsg, seterrormsg] = useState({});
  let navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, createmodal, modal } =
    useContext(noteContext);

  console.log(isLoggedIn);

  const handlechange = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    seterrormsg(FormValidation(input));

    let url = "https://empolye-portal.onrender.com/empolyee/login";

    const { data } = await axios.post(url, input);

    try {
      if (data.success === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate("/ViewEmployee"));
        setIsLoggedIn(true);
        // Handle successful login
        localStorage.setItem("token", data.data.token);
        sessionStorage.setItem("name", data.data.name);
        sessionStorage.setItem("Email", data.data.Email);
        sessionStorage.setItem("Phone", data.data.Phone);
        localStorage.setItem("id", data.data._id);
      } else if (data.success === null) {
        seterrorMassage("invalid credentials!");
        console.log(data.msg);
        // You can also save the token or user data received in the response in local storage or a cookie for persistent login sessions.
      }
    } catch (error) {
      // Handle login error, display an error message, etc.
      console.error(`login failed ${error}`);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <HomePage />
        </div>
      ) : (
        <main className="container-fluid d-flex justify-content-center bg-addempolyee">
          <section
            style={{ height: "100px", width: "20%", marginTop: "25vh" }}
            className="position-relative"
          >
            <form
              className="bg-light p-4 rounded-3"
              onSubmit={(event) => onsubmit(event)}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  // required
                  placeholder="Email address"
                  aria-describedby="emailHelp"
                  value={Email}
                  name="Email"
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.Email && (
                  <p className="text-danger m-0">{errormsg.Email}</p>
                )}
              </div>

              <div id="emailHelp" className="text-danger fs-5">
                <p>{Message}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  // required
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  name="password"
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.password && (
                  <p className="text-danger m-0">{errormsg.password}</p>
                )}
              </div>
              <div className="d-flex flex-column justify-content-center">
                <button type="submit" className="btn btn-primary fw-bold">
                  Login
                </button>
                <div className="d-flex mt-2 mb-0">
                  <p className="me-1">Not a Member?</p>
                  <p
                    className="text-primary user-select-none"
                    onClick={createmodal}
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </form>
            <div className="position-absolute top-100 start-50 translate-middle">
              {modal && <CreateAccount />}
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Login;
