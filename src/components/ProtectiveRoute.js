import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Context/AuthContext';
import { useContext } from 'react';

function ProtectiveRoute({ children }) {
  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      navigate('/');
    }
  }, [user, navigate]);

  // Return the children only if the user is authenticated
  return user ? children : null;
}

export default ProtectiveRoute;
