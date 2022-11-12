import React, { useState, useMemo } from "react";
import { useHistory, Link } from 'react-router-dom';
import classnames from 'classnames';
import './login.css';


function Login() {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const history = useHistory();

  function handleChangeState(events) {
    const { name, value } = events.target;
    setLoginData((prev) => ({...prev, [name]: value}))
  }

  const isLogin = useMemo(() => Boolean(loginData.usernameOrEmail && loginData.password), [loginData])

  return (
    <main
        className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
      >
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="text"
              name="usernameOrEmail"
              onChange={(e) => handleChangeState(e)}
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div
            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
          >
            <input
              type="password"
              name="password"
              onChange={(e) => handleChangeState(e)}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button
            onClick={() => history.push('/dashboard')}
            disabled={!isLogin}
            className={
              classnames({
                'transform': true,
                'rounded-sm': true,
                'bg-indigo-600': true,
                'py-2': true,
                'font-bold': true,
                'duration-300': true,
                'hover:bg-indigo-400': false,
                'cant-login': !isLogin,
              })
            }
            >
            LOG IN
          </button>

          <p
            className="uppercase transform text-center font-semibold text-gray-300"
            >*Fill any value to continue
          </p>

          <p className="text-center text-lg">
            No account?
            <Link
              to={{ pathname: '/signup' }}
              className="font-medium text-indigo-500 underline-offset-4 hover:underline mx-2"
            >
                Create One
            </Link>
          </p>
        </section>
      </main>
  )
}

export default Login;