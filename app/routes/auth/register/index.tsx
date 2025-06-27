import type { Route } from "./+types";
import { RegisterForm } from "./components/RegisterForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moda - Register" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function RegisterPage() {
  return <RegisterForm />;
}
