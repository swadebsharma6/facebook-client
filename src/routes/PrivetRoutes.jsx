import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import { AuthContext } from "../context/Provider/AuthProvider";


const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loader/>
    }

    if(user){
        return children
    }
    return  <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;