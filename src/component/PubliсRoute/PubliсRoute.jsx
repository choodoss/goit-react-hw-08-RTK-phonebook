import { useSelector } from "react-redux";
import { selectorAuth } from "../../storage/selectors";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const { token } = useSelector(selectorAuth);
    const location = useLocation();

    if (token) {
        return <Navigate to={location.state ?? '/contacts'} />;
    } else {
        return children;
    }
};

export default PublicRoute;