import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FormValidation from "../Validation/FormValidation";


function EditEmployee() {
  const { id } = useParams();
  console.log(id);
  const [employee, setemployee] = useState({
    name: "",
    Email: "",
    designation: "",
    age: "",
    Phone: "",
  });

  const { name, designation, Email, age, Phone } = employee;

  const [Message, setMassage] = useState("");
  const [Msg, seterrorMassage] = useState({});

  let getemployee = async () => {
    let url = `https://empolye-portal.onrender.com/empolyee/${id}`;

    let { data } = await axios.get(url);
    console.log(data);
    setemployee(data.result);
  };

  useEffect(() => {
    getemployee();
  }, []);

  const handlechange = (event) => {
    setemployee({ ...employee, [event.target.name]: event.target.value });
  };

  const submitform = async (event) => {
    event.preventDefault();
    seterrorMassage(FormValidation(employee));

    try {
      let { data } = await axios.put(
        "https://empolye-portal.onrender.com/empolyee/update/" + id,
        employee
      );
      if (data.success === true) {
        setMassage("Employee upated successfully");
        window.location.assign("/ViewEmployee");
      }
    } catch (error) {
      alert("somthing went wrong");
    }
  };

  return (
    <>
      <main className=" container-fluid bg-editempolyee">
        <div className=" text-success mt-5 d-flex justify-content-center">
          <div>
            <h2>{Message}</h2>
          </div>
        </div>
        <div className="forms container-fluid mt-2 d-flex justify-content-center align-items-center">
          <form
            onSubmit={(event) => submitform(event)}
            style={{ color: "#ffffffeb" }}
            className="bg-dark px-4 py-4 rounded-4"
          >
            <div className="">
              <h1>Edit Employee</h1>
            </div>

            <div className=" mt-4">
              <p className="me-2 h5">Name</p>
              <input
                type="text"
                name="name"
                size={30}
                value={name}
                onChange={(event) => handlechange(event)}
              />
              {Msg.name && <p className="text-danger m-0">{Msg.name}</p>}
            </div>
            <div className=" mt-2">
              <p className="me-2  h5 ">designation </p>
              <input
                type="text"
                name="designation"
                size={30}
                value={designation}
                onChange={(event) => handlechange(event)}
              />
              {Msg.designation && (
                <p className="text-danger m-0">{Msg.designation}</p>
              )}
            </div>
            <div className=" mt-2">
              <p className="me-2  h5 ">Email </p>
              <input
                type="text"
                name="Email"
                size={30}
                value={Email}
                onChange={(event) => handlechange(event)}
              />
              {Msg.Email && <p className="text-danger m-0">{Msg.Email}</p>}
            </div>
            <div className=" mt-2">
              <p className="me-2  h5">age </p>
              <input
                type="text"
                name="age"
                size={30}
                value={age}
                onChange={(event) => handlechange(event)}
              />
              {Msg.age && <p className="text-danger m-0">{Msg.age}</p>}
            </div>
            <div className=" mt-2">
              <p className="me-2  h5">Phone </p>
              <input
                type="text"
                name="Phone"
                size={30}
                value={Phone}
                onChange={(event) => handlechange(event)}
              />
              {Msg.Phone && <p className="text-danger m-0">{Msg.Phone}</p>}
            </div>
            <div className=" mt-3 row d-flex justify-content-center">
              <button className="btn btn-primary fs-5 fw-semibold col-6">
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default EditEmployee;
