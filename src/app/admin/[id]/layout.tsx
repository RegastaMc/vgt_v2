import Sidebar from "@/domains/admin/components/Sidebar copy";
import Topbar from "@/domains/admin/components/Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:pl-64">
        <Topbar />

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
