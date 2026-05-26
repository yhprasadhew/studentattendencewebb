import SideNav from "./_components/sideNav";

function Layout({ children }) {
  return (
    <div>
      <div className="w-64 fixed  md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}
export default Layout;
