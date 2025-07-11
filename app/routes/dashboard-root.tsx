import type { Route } from "./+types/dashboard-root";
import Dashboard from "../dashboard/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function DashboardRootComponent() {
  return <Dashboard />;
}
