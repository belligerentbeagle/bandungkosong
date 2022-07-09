import { useRouter } from "next/router";
import { useRef, useState } from "react";
import VisibilityIcon from "../svg/Visbility.icon";
import VisibilityOffIcon from "../svg/VisibilityOff.icon";

const Login = () => {
  const router = useRouter();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const email = "constancelim@astons.com";
  const password = "password";

  const toggleVisibilityHandler = () => setIsVisible(!isVisible);

  const loginHandler = (event) => {
    event.preventDefault();

    if (
      emailInputRef.current.value === email &&
      passwordInputRef.current.value === password
    )
      return router.push({
        pathname: "/dashboard",
      });

    setError("incorrect credentials");
  };

  return (
    <div className="p-12 w-full rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="mt-8 grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Email address</span>
          <input
            ref={emailInputRef}
            type="email"
            className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder="constancelim@astons.com"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            ref={passwordInputRef}
            type={isVisible ? "text" : "password"}
            className="
                  my-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder="password"
          />
          <div className="select-none	flex items-center gap-1">
            Toggle password visibility
            <div onClick={toggleVisibilityHandler} className="cursor-pointer">
              {isVisible ? (
                <VisibilityOffIcon></VisibilityOffIcon>
              ) : (
                <VisibilityIcon></VisibilityIcon>
              )}
            </div>
          </div>
        </label>

        {error && <div className="text-red-600">{error}</div>}

        <button
          onClick={loginHandler}
          className="select-none bg-gray-600 text-gray-50 rounded-lg py-2 px-6 transition-colors hover:bg-gray-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
