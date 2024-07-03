import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/selectors';
import { useEffect } from 'react';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && routeProps.restricted) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo, isLoggedIn, routeProps.restricted]);

  return children;
}
