import type { ReactNode } from "react";
import logoDark from "../welcome/logo-dark.svg";
import logoLight from "../welcome/logo-light.svg";
import { Outlet } from "react-router";


export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col p-6 gap-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-200 dark:bg-violet-700">
            <img src={logoLight} alt="Moda" className="w-7 dark:hidden" />
            <img src={logoDark} alt="Moda" className="w-7 hidden dark:block" />
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Moda
          </span>
        </div>
        <nav className="flex flex-col gap-2">
          <SidebarLink icon="home" label="Dashboard" active />
          <SidebarLink icon="phone" label="Calls" />
          <SidebarLink icon="check-square" label="Tasks" />
          <SidebarLink icon="users" label="Contacts" />
          <SidebarLink icon="settings" label="Account Settings" />
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
          <div className="w-10 h-10 rounded-full bg-violet-400 flex items-center justify-center text-white font-bold">
            JD
          </div>
        </header>
        {/* Content */}
        {/* Content (children) */}
        <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-950 overflow-y-auto">
          <Outlet /> {/* <-- This is the fix */}
        </main>{" "}
      </div>
    </div>
  );
}

function SidebarLink({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  const iconMap: Record<string, ReactNode> = {
    home: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0h4m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z"
        />
      </svg>
    ),
    phone: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    "check-square": (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 11l3 3L22 4M2 12l7 7 13-13"
        />
      </svg>
    ),
    users: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6 2a4 4 0 00-3-3.87"
        />
      </svg>
    ),
    settings: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-violet-100 dark:hover:bg-violet-800 transition font-medium ${
        active ? "bg-violet-100 dark:bg-violet-800" : ""
      }`}
    >
      {iconMap[icon]}
      {label}
    </button>
  );
}
