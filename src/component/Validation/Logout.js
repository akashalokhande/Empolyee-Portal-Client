import React, { useContext } from "react";
import noteContext from "../home/Contex.js/NoteContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function Logout() {
  const { setIsLoggedIn } = useContext(noteContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("Email");
  const MobileNumber = sessionStorage.getItem("Phone");

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const expirationTime = decodedToken.exp * 1000;

  if (Date.now() >= expirationTime) {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <>
      <main className="d-flex">
        <div className="dropdown ms-3 ">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                {email}
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                {MobileNumber}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-black"
                onClick={() => navigate("/ViewEmployee")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-black"
                onClick={handleLogout}
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Logout;
