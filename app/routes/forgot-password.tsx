import ForgotPassword from "~/auth/forgot-password";
import type { Route } from "./+types/forgot-password";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
