import axios from "axios";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import noteContext from "../home/Contex.js/NoteContext";
import FormValidation from "./FormValidation";
import Loader from "../Loader/Loader";

function CreateAccount() {
  const cotext = useContext(noteContext);
  const [loading, setLoading] = useState(false);
  const [errormsg, seterrormsg] = useState({});
  const [input, setinput] = useState({
    name: "",
    Email: "",
    Phone: "",
    password: "",
  });
  const [Message, seterrorMassage] = useState("");
  const { name, Email, Phone, password } = input;

  const handlechange = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const submitform = async (event) => {
    event.preventDefault();
    seterrormsg(FormValidation(input));
    setLoading(true);

    let url = "https://empolye-portal.onrender.com/empolyee/register";
    const { data } = await axios.post(url, input);

    try {
      if (data.success === true) {
        alert("Account Created Successfully");
        window.location.assign("/login");
      } else if (data.success === false) {
        seterrorMassage(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    console.log(data);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="container">
          <div className="d-flex justify-content-center mt-5">
            <h2 className="text-danger">{Message}</h2>
          </div>
          <div className="container-fluid mt-2 forms d-flex justify-content-center">
            <form
              onSubmit={(event) => submitform(event)}
              style={{ color: "#ffffffeb" }}
              className="bg-dark rounded-4 px-4 pb-4"
            >
              <div className="mt-4 d-flex justify-content-between h4">
                <h1>Sign Up</h1>
                <MdClose onClick={cotext.createmodal} />
              </div>

              <div className="mt-4">
                <p className="me-2 h5">Full Name</p>
                <input
                  type="text"
                  name="name"
                  className=""
                  // required
                  value={name}
                  size={30}
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.name && (
                  <p className="text-danger m-0">{errormsg.name}</p>
                )}
              </div>
              <div className="mt-2">
                <p className="me-2  h5 ">Email</p>
                <input
                  type="text"
                  name="Email"
                  // required
                  value={Email}
                  size={30}
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.Email && (
                  <p className="text-danger m-0">{errormsg.Email}</p>
                )}
              </div>
              <div className="mt-2">
                <p className="me-2  h5 ">Mob.No</p>
                <input
                  type="text"
                  name="Phone"
                  value={Phone}
                  // required
                  size={30}
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.Phone && (
                  <p className="text-danger m-0">{errormsg.Phone}</p>
                )}
              </div>

              <div className="mt-2">
                <p className="me-2  h5">Password </p>
                <input
                  type="password"
                  name="password"
                  // required
                  value={password}
                  size={30}
                  onChange={(event) => handlechange(event)}
                />
                {errormsg.password && (
                  <p className="text-danger m-0">{errormsg.password}</p>
                )}
              </div>
              <div className="mt-3 row d-flex justify-content-center">
                <button className="btn btn-success col-6 fs-5 fw-semibold ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
}

export default CreateAccount;
