import "./nav-menu.scss";
import { useState } from "react";
import UserIcon from "assets/icon-user.png";
import ExpandIcon from "assets/icon-expand.png";
import Dropdown from "components/ui/dropdown/dropdown";

const NavMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="container"
      aria-hidden
      onClick={() => setShowDropdown((pre) => !pre)}
    >
      <div className="nav-menu">
        <img src={UserIcon} alt="user-icon" />
        <p>main bereich</p>
        <img src={ExpandIcon} alt="expand-icon" />
      </div>
      <Dropdown
        isOpened={showDropdown}
        onToggle={() => setShowDropdown((pre) => !pre)}
        options={[
          {
            name: "My published jokes",
            isHighlighted: false,
          },
          {
            name: "My saved jokes",
            isHighlighted: false,
          },
          { name: "Account information", isHighlighted: false },
          { name: "Publish new joke", isHighlighted: true },
        ]}
      />
    </div>
  );
};

export default NavMenu;
