import type { Route } from "./+types";
import { LoginForm } from "./components/LoginForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moda - Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function LoginPage() {
  return <LoginForm />;
}
