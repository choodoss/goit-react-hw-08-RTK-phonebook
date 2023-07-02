import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import PhoneBook from '../Pages/PhoneBook/PhoneBook';
import Registry from '../Pages/Signup/Signup';
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import PublicRoute from "../component/PubliсRoute/PubliсRoute";


export default function App() {
  const app = (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Registry /></PublicRoute>} />
      <Route path="/contacts" element={<PrivateRoute><PhoneBook /></PrivateRoute>} />
    </Routes>
  );

  return app;
}