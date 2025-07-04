export const metadata = {
  title: "Dashboard",
  description: "Dashboard section with sidebar and header",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="hover:text-gray-300">
            Home
          </a>
          <a href="/dashboard/settings" className="hover:text-gray-300">
            Settings
          </a>
          {/* Add more sidebar links here */}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Dashboard Header</h1>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
