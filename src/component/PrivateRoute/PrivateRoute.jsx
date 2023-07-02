import { useSelector } from "react-redux";
import { selectorAuth } from "../../storage/selectors";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { token } = useSelector(selectorAuth);
    const location = useLocation();

    return token ? children : <Navigate to='/' state={location} />
};

export default PrivateRoute;