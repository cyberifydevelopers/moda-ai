// import { DashboardLayout } from "../layout/dashboard-layout";

const recentCalls = [
  {
    id: 1,
    title: "call-_ +13193103836_6wfdCvYUGsPd",
    date: "Jun 25, 2025",
    tasks: 3,
    status: "pending",
  },
  {
    id: 2,
    title: "Premier Phone Services - Customer Support",
    date: "May 24, 2025",
    tasks: 3,
    status: "pending",
  },
  {
    id: 3,
    title: "Weekly Team Sync",
    date: "May 24, 2024",
    tasks: 0,
    status: "complete",
  },
  {
    id: 4,
    title: "Client Requirements Review",
    date: "May 22, 2024",
    tasks: 0,
    status: "none",
  },
  {
    id: 5,
    title: "Project Planning Meeting",
    date: "May 20, 2024",
    tasks: 3,
    status: "pending",
  },
  {
    id: 6,
    title: "Weekly Team Sync",
    date: "May 15, 2024",
    tasks: 3,
    status: "pending",
  },
];

function TaskBadge({ status, tasks }: { status: string; tasks: number }) {
  if (status === "pending")
    return (
      <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded-full">
        {tasks} pending tasks
      </span>
    );
  if (status === "complete")
    return (
      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
        All tasks complete
      </span>
    );
  return (
    <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
      No tasks
    </span>
  );
}

export default function Dashboard() {
  return (
    // <DashboardLayout>
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Recent Calls
          </h2>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            View All Calls
          </a>
        </div>
        <div className="space-y-3">
          {recentCalls.map((call) => (
            <div
              key={call.id}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between shadow-sm"
            >
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100 text-base mb-1">
                  {call.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {call.date}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TaskBadge status={call.status} tasks={call.tasks} />
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="19" cy="12" r="1.5" />
                    <circle cx="5" cy="12" r="1.5" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    // </DashboardLayout>
  );
}
