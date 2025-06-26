import type { Route } from "./+types/dashboard-layout";

import { DashboardLayout } from "../layout/dashboard-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function DashboardLayoutComponent() {
  return <DashboardLayout />;
}
