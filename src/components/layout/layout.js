import "./layout.scss";
import Header from "./header";
import NavBar from "./nav-bar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <Header />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
