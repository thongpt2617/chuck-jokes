import "./nav-item.scss";

const NavItem = (props) => {
  const { children, className } = props;
  return <p className={`nav-item ${className}`}>{children}</p>;
};

export default NavItem;
