import { useState } from "react";
import logoDark from "~/welcome/logo-dark.svg";
import logoLight from "~/welcome/logo-light.svg";

const DUMMY_EMAIL = "test@moda.com";
const DUMMY_OTP = "123456";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === DUMMY_EMAIL) {
      setError("");
      setStep(2);
    } else {
      setError("Email not found. Try test@moda.com");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === DUMMY_OTP) {
      setError("");
      setStep(3);
    } else {
      setError("Invalid OTP. Try 123456");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col items-center gap-8">
        <div className="w-24 mb-2">
          <img src={logoLight} alt="Moda Logo" className="block w-full dark:hidden" />
          <img src={logoDark} alt="Moda Logo" className="hidden w-full dark:block" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Forgot Password
        </h1>
        {success ? (
          <div className="w-full text-center">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-4">Password changed successfully!</p>
            <p className="text-gray-600 dark:text-gray-300">You can now log in with your new password.</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <form className="w-full flex flex-col gap-4" onSubmit={handleEmailSubmit}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Enter your email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="test@moda.com"
                />
                <button type="submit" className="w-full py-2 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-colors">
                  Send OTP
                </button>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </form>
            )}
            {step === 2 && (
              <form className="w-full flex flex-col gap-4" onSubmit={handleOtpSubmit}>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Enter the OTP sent to your email
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  required
                  className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123456"
                />
                <button type="submit" className="w-full py-2 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-colors">
                  Verify OTP
                </button>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </form>
            )}
            {step === 3 && (
              <form className="w-full flex flex-col gap-4" onSubmit={handlePasswordSubmit}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Enter new password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New password"
                />
                <button type="submit" className="w-full py-2 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-colors">
                  Change Password
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </main>
  );
}
