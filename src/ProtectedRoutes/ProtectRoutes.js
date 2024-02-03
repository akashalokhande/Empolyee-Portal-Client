// import jwtDecode from "jwt-decode";
// import Swal from "sweetalert2";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import noteContext from "../component/home/Contex.js/NoteContext";

// function ProtectRoutes({ Component }) {
//   const navigate = useNavigate();
//   const context = useContext(noteContext);

//   let token = localStorage.getItem("token");
//   const decodedToken = jwtDecode(token);
//   const expirationTime = decodedToken.exp * 1000;
 
//   useEffect(()=>{
//     if (Date.now() >= expirationTime) {
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Your Session is exprired Please login!",
//         showConfirmButton: false,
//         timer: 1500,
//       }).then(() => {
//         localStorage.removeItem("token");
//         context.setIsLoggedIn(false);
//         navigate("/");
//       });
//     }
//   },[])
  

//   // useEffect(() => {
//   //   if (!localStorage.getItem("token")) {
//   //     context.setIsLoggedIn(false);
//   //     navigate("/");
//   //   }
//   // }, []);

//   return (
//     <>
//       <Component />
//     </>
//   );
// }

// export default ProtectRoutes;
