import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import noteContext from "./Contex.js/NoteContext";
import LoginLogoutButton from "../Validation/Login&LogoutButton";


function Menu({ input, bg,output }) {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${bg} bg-black`}>
        <div className="container-fluid">
          <button
            className="navbar-brand bg-success shadow-lg border-0"
            onClick={() => navigate("/")}
          >
            Employee Portal
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item me-3 ${input}`}>
                <Link
                  className="text-decoration-none text-black btn btn-info"
                  to="/ViewEmployee"
                >
                  List Employee
                </Link>
              </li>
              <li className={`nav-item me-3 ${input}`}>
                <Link
                  className="text-decoration-none text-black btn btn-warning "
                  to="/AddEmpolyee"
                >
                  Add Empolyee
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <form className={`d-flex ${input} ${output}`} role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={context.search}
                  onChange={context.searchfilter}
                />
              </form>
              <div className="me-3 text-secondary">
                <LoginLogoutButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
