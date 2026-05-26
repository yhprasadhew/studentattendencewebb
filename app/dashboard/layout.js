import SideNav from "./_components/sideNav";
import Header from "./_components/header";

function Layout({ children }) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 fixed hidden md:block h-full">
        <SideNav />
      </div>

      {/* Main area */}
      <div className="flex flex-col flex-1 md:ml-64">

        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="p-4">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;