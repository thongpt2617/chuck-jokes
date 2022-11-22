import "./nav-bar.scss";
import NavItem from "./nav-item";
import NavMenu from "./nav-menu";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavItem className="first-item">so funktionert's</NavItem>
      <NavItem>sonderangebote</NavItem>
      <NavMenu />
    </div>
  );
};
export default NavBar;
