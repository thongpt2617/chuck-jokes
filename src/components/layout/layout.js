import "./layout.scss";
import Header from "./header";
import NavBar from "./nav-bar";
import Footer from "./footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <NavBar />
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
