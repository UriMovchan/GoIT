import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations } from './redux/operations';
import { authSelectors } from './redux/selectors';

import appStyles from './styles/AppCommon.module.scss';

import NotFound from './pages/NotFoundPage';
import Loader from './components/Loader/';
import Header from './components/Header';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ForgottenPage = lazy(() => import('./pages/ForgottenPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const ExpenseIncomePage = lazy(() => import('./pages/ExpenseIncomePage'));

const ReportPage = lazy(() => import('./pages/ReportPage'));

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetching);
  const [inProgress, setInProgress] = useState(true);
  useEffect(() => {
    const getCurrentUser = async () => {
      dispatch(await authOperations.getCurrentUser());
      setInProgress(false);
    };
    getCurrentUser();
  }, [dispatch]);

  if (inProgress || isFetching) {
    return <Loader />;
  }

  return (
    <div className={isLoggedIn ? appStyles.loggedInBg : appStyles.loggedOutBg}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute redirectTo="/login" />} />

          <Route
            path="/login"
            element={<PublicRoute redirectTo="/main-page" restricted children={<LoginPage />} />}
          />

          <Route
            path="/register"
            element={<PublicRoute redirectTo="/main-page" restricted children={<RegisterPage />} />}
          />

          <Route
            path="/forgotten"
            element={<PublicRoute redirectTo="/main-page" restricted children={<ForgottenPage />} />}
          />

          <Route
            path="/resetPassword/:verificationToken"
            element={
              <PublicRoute redirectTo="/main-page" restricted children={<ResetPasswordPage />} />
            }
          />

          <Route
            exact
            path="/main-page"
            element={
              <PrivateRoute redirectTo="/login" restricted children={<ExpenseIncomePage />} />
            }
          />

          <Route
            exact
            path="/report-page"
            element={<PrivateRoute redirectTo="/login" restricted children={<ReportPage />} />}
          />

          <Route path="*" element={<PublicRoute children={<NotFound />} />} />
        </Routes>
      </Suspense>
    </div>
  );
}
