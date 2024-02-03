import { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import { Link} from "react-router-dom";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

import noteContext from "./Contex.js/NoteContext";

function ViewEmployee() {
  let [employee, setemployee] = useState([]);
  const context = useContext(noteContext);

  let getemployeelist = async () => {
    const id_user = localStorage.getItem("id");

    let url = `https://empolye-portal.onrender.com/empolyee/search/${id_user}`;
    let { data } = await axios.get(url);

    setemployee(data.result);
  };

  let deleteemplyee = async (id) => {
    let url = `https://empolye-portal.onrender.com/empolyee/delete/${id}`;

    await axios
      .delete(url)

      .then(() => {
        getemployeelist();
      })
      .catch((error) => alert("could not delete" + error));
  };

  useEffect(() => {
    getemployeelist();
  }, []);

  return (
    <>
      <main className="bg-viewempolyee">
        <Menu />

        <div className="container">
          <div className=" text-center m-4" style={{ color: "#fffffff2" }}>
            <h1>View Employee</h1>
          </div>

          <table className="table table-bordered border-dark shadow-lg text-center ">
            <thead>
              <tr className="table-primary">
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Email</th>
                <th scope="col">age</th>
                <th scope="col">Phone</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              {employee
                .filter((values) => {
                  return context.search.toLowerCase() === ""
                    ? values
                    : values.name.toLowerCase().includes(context.search);
                })
                .map((value, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.designation}</td>
                    <td>{value.Email}</td>
                    <td>{value.age}</td>
                    <td>{value.Phone}</td>
                    <td>
                      <Link
                        className="text-decoration-none text-primary"
                        to={`/EditEmployee/${value._id}`}
                      >
                        <MdModeEdit />
                      </Link>
                    </td>
                    <td>
                      <Link
                        to=""
                        className="text-decoration-none text-danger h4"
                        onClick={() => deleteemplyee(value._id)}
                      >
                        <MdDeleteForever />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default ViewEmployee;
