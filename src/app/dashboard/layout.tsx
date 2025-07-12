import React from "react";

const navOptions = [
  {
    label: "Explore",
    href: "/dashboard",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    label: "All Requests",
    href: "/dashboard/requests",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"
        />
      </svg>
    ),
  },
  {
    label: "Meetings",
    href: "/dashboard/meetings",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Account",
    href: "/dashboard/profile",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
        />
      </svg>
    ),
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r shadow-sm py-8 px-4 gap-2">
        <div className="mb-8 text-2xl font-bold text-blue-700">SkillSwap</div>
        {navOptions.map((opt, idx) => (
          <a
            key={opt.label}
            href={opt.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition text-gray-700 hover:bg-blue-50 hover:text-blue-700 ${
              idx === 0 ? "bg-blue-100 text-blue-700" : ""
            }`}
          >
            {opt.icon}
            <span>{opt.label}</span>
          </a>
        ))}
      </aside>
      {/* Main content */}
      <main className="flex-1 flex flex-col pb-16 md:pb-0">{children}</main>
      {/* Bottom bar for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow flex md:hidden justify-around py-2">
        {navOptions.map((opt, idx) => (
          <a
            key={opt.label}
            href={opt.href}
            className={`flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium ${
              idx === 0 ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {opt.icon}
            <span>{opt.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
