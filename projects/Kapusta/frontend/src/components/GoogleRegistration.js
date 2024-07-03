import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/operations';
import GoogleLogin from '@leecheuk/react-google-login';
import googleSymbol from '../images/google-symbol.svg';
import loginStyles from '../styles/Login.module.scss';

export default function GoogleRegistration() {
  const dispatch = useDispatch();

  const responseGoogle = res => {
    if (res.profileObj) {
      const user = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        googleId: res.profileObj.googleId,
        picture: res.profileObj.imageUrl,
      };

      dispatch(authOperations.registerWithGoogle(user));
    }
  };

  const responseError = error => {
    console.dir(error);
    console.log(error.details);
  };

  return (
    <div>
      <GoogleLogin
        clientId="932034982176-o57mhdrk7tmcd5thakq909s6bpfsd4vp.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button onClick={renderProps.onClick} className={loginStyles.googleBtn}>
            <img src={googleSymbol} alt="Google Symbol" className={loginStyles.googleSymbol} />
            Google
          </button>
        )}
        buttonText="Login"
      />
    </div>
  );
}
