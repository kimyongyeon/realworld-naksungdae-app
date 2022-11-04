import { getUser, setIsLoaded, setUser } from '@src/store/authSlice';
import { RootState } from '@src/store/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const { user, isLogin, isLoaded } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      dispatch(setIsLoaded());
      return;
    }

    (async () => {
      const user = await getUser(token);
      dispatch(setUser(user));
    })();
  }, []);

  return (
    <>
      {isLoaded && (
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              conduit
            </Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>
              {!isLogin ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login/page/login">
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login/page/register">
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="">
                      <i className="ion-compose">&nbsp;New Article</i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login/page/settings">
                      <i className="ion-gear-a">&nbsp;Settings</i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login/page/profile">
                      <i>&nbsp;{user.username}</i>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
