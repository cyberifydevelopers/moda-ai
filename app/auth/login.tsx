import { useNavigate } from "react-router";
import logoDark from "../welcome/logo-dark.svg";
import logoLight from "../welcome/logo-light.svg";

export function Login() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col items-center gap-8">
        <div className="w-32 mb-2">
          <img src={logoLight} alt="Moda Logo" className="block w-full dark:hidden" />
          <img src={logoDark} alt="Moda Logo" className="hidden w-full dark:block" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center text-base mb-2">
          Sign in to your account to continue
        </p>
        <form className="w-full flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="••••••••"
            />
            <div className="flex justify-end mt-1">
              <button
                type="button"
                className="text-sm text-blue-700 dark:text-blue-400 hover:underline focus:outline-none"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            className="w-full py-2 mt-2 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg shadow-sm transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="w-full flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="w-full text-center">
          <span className="text-gray-600 dark:text-gray-300 text-sm">Don't have an account?</span>
          <button
            type="button"
            className="ml-2 text-blue-700 dark:text-blue-400 font-semibold hover:underline text-sm"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
}