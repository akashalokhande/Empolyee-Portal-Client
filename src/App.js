import { Route, Routes } from "react-router-dom";
import ViewEmployee from "./component/home/ViewEmployee";
import EditEmployee from "./component/home/EditEmployee";
import AddEmpolyee from "./component/home/AddEmpolyee";
import Login from "./component/Validation/Login";
import NoteState from "./component/home/Contex.js/NoteState";
import HomePage from "./component/home/HomePage";
// import ProtectRoutes from "./ProtectedRoutes/ProtectRoutes";

function App() {
  return (
    <>
      <NoteState>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/AddEmpolyee" element={<AddEmpolyee />} />
          <Route path="/ViewEmployee" element={<ViewEmployee />} />
          <Route path="/EditEmployee/:id" element={<EditEmployee />} />
          <Route />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
