import MyNavbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <MyNavbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
