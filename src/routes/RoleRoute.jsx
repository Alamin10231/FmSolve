// import React, { useContext, useEffect, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthProvider";

// // Minimal RoleRoute using Firebase custom claims (no extra states/IIFEs)
// export const RoleRoute = ({ allowed = ["admin"], children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [ok, setOk] = useState(null); // null = checking, true/false = result
//   const location = useLocation();

//   useEffect(() => {
//     if (!user) return;
//     const allowList = allowed.map((a) => a.toLowerCase());
//     user.getIdTokenResult().then(
//       (res) => {
//         const role = (res?.claims?.role || "user").toLowerCase();
//         setOk(allowList.length === 0 || allowList.includes(role));
//       },
//       () => {
//         setOk(allowList.length === 0 || allowList.includes("user"));
//       }
//     );
//   }, [user, allowed]);

//   if (loading) return null; // Global auth loader handles init
//   if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
//   if (ok === null) return null; // brief claim check, no extra spinner
//   return ok ? children : <Navigate to="/" replace />;
// };

// export default RoleRoute;
