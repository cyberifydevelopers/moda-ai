import type { Route } from "./+types";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
