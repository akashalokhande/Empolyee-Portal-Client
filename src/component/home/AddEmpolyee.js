import { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import FormValidation from "../Validation/FormValidation";


function AddEmpolyee() {
  const [employee, setemployee] = useState({
    name: "",
    designation: "",
    age: "",
    Phone: "",
    Email: "",
    id: localStorage.getItem("id"),
  });

  const { name, designation, Email, age, Phone } = employee;

  const [Message, seterrorMassage] = useState({});

  const [mobile_email_exists, setmobile_email_exists] = useState("");

  const handlechange = (event) => {
    setemployee({ ...employee, [event.target.name]: event.target.value });
  };

  const submitform = async (event) => {
    event.preventDefault();
    seterrorMassage(FormValidation(employee));

    await axios
      .post("https://empolye-portal.onrender.com/empolyee/add", employee)
      .then((result) => {
        if (result.data.success === true) {
          alert("Employee Added Successfully");
          window.location.assign("/ViewEmployee");
        } else if (result.data.success === false) {
          setmobile_email_exists(result.data.massage);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main className=" bg-addempolyee">
        <Menu output="d-none" />
        <div className=" text-danger mt-5 d-flex justify-content-center">
          <div>
            <h3>{mobile_email_exists}</h3>
          </div>
        </div>
        <div className="container-fluid mt-2 forms d-flex justify-content-center">
          <form
            onSubmit={(event) => submitform(event)}
            style={{ color: "#ffffffeb" }}
            className="bg-dark rounded-4 px-4 pb-4"
          >
            <div className="mt-4">
              <h1>Add Employee</h1>
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
              {Message.name && (
                <p className="text-danger m-0">{Message.name}</p>
              )}
            </div>
            <div className="mt-1">
              <p className="me-2  h5 ">designation </p>
              <input
                type="text"
                name="designation"
                // required
                value={designation}
                size={30}
                onChange={(event) => handlechange(event)}
              />
              {Message.designation && (
                <p className="text-danger m-0">{Message.designation}</p>
              )}
            </div>
            <div className="mt-1">
              <p className="me-2  h5 ">Email </p>
              <input
                type="text"
                name="Email"
                value={Email}
                // required
                size={30}
                onChange={(event) => handlechange(event)}
              />
              {Message.Email && (
                <p className="text-danger m-0">{Message.Email}</p>
              )}
            </div>
            <div className="mt-1">
              <p className="me-2  h5">age </p>
              <input
                type="text"
                name="age"
                // required
                value={age}
                size={30}
                onChange={(event) => handlechange(event)}
              />
              {Message.age && <p className="text-danger m-0">{Message.age}</p>}
            </div>
            <div className="mt-1">
              <p className="me-2  h5">Phone </p>
              <input
                type="text"
                name="Phone"
                // required
                value={Phone}
                size={30}
                onChange={(event) => handlechange(event)}
              />
              {Message.Phone && <p className="text-danger">{Message.Phone}</p>}
            </div>
            <div className="mt-3 row d-flex justify-content-center">
              <button className="btn btn-success col-6 fs-5 fw-semibold ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddEmpolyee;
