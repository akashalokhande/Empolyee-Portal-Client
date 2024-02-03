import React, { useContext, useEffect } from "react";
import noteContext from "../home/Contex.js/NoteContext";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import { MdPerson } from "react-icons/md";


function LoginLogoutButton() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(noteContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  });


  return (
    <section className="d-flex">
      <div>
        {isLoggedIn ? (
          <div>
            <Logout input="d-none" />
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
      <div className={`h3`}>
        <MdPerson />
      </div>
    </section>
  );
}

export default LoginLogoutButton;
