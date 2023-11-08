import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import circle from "../../public/circleanimation.json";
import { useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const lottieRef = useRef();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-[300px] mx-auto">
        <Lottie lottieRef={lottieRef} animationData={circle} />
      </div>
    );
  } else if (!user) {
    return <Navigate state={location.state} to="/login" />;
  }
  return children;
};

export default PrivateRoute;
