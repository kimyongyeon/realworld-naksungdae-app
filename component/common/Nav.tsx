import { getUser, setIsLoaded, setUser } from '@src/lib/store/authSlice';
import { RootState } from '@src/lib/store/store';
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
            <Link href="/">
              <a className="navbar-brand">conduit</a>
            </Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              {!isLogin ? (
                <>
                  <li className="nav-item">
                    <Link href="/user/login">
                      <a className="nav-link">Sign in</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/user/register">
                      <a className="nav-link">Sign up</a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link href="">
                      <a className="nav-link">
                        <i className="ion-compose">&nbsp;New Article</i>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/user/settings">
                      <a className="nav-link">
                        <i className="ion-gear-a">&nbsp;Settings</i>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/user/profile">
                      <a className="nav-link">
                        <i>&nbsp;{user.username}</i>
                      </a>
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
