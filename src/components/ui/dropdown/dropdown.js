import "./dropdown.scss";
import LightGreenIcon from "assets/icon-light-green.png";
import OrangeLightIcon from "assets/icon-light-orange.png";
import RedLightIcon from "assets/icon-light-red.png";

const Dropdown = ({
  isOpened = false,
  onToggle = () => {},
  options = [],
  onSelect = () => {},
  anchorClassName = "",
  dropdownClassName = "",
  showRanking = false,
}) => {
  return (
    <div className={`anchor ${anchorClassName}`}>
      {isOpened && (
        <div className={`dropdown ${dropdownClassName}`}>
          {showRanking
            ? options.map((opt, index) => {
                return (
                  <div
                    className={`option ${
                      opt?.isHighlighted ? "highlighted" : ""
                    }`}
                  >
                    {index === 0 && <img src={LightGreenIcon} alt="icon" />}
                    {index > 0 && index < 3 && (
                      <img src={OrangeLightIcon} alt="icon" />
                    )}
                    {index >= 3 && <img src={RedLightIcon} alt="icon" />}
                    <p
                      key={opt?.name}
                      onClick={() => {
                        onSelect(opt);
                        onToggle();
                      }}
                    >
                      {opt.name}
                    </p>
                  </div>
                );
              })
            : options.map((opt, index) => {
                return (
                  <div
                    className={`option ${
                      opt?.isHighlighted ? "highlighted" : ""
                    }`}
                  >
                    <p
                      key={opt?.name}
                      onClick={() => {
                        onSelect(opt);
                        onToggle();
                      }}
                    >
                      {opt.name}
                    </p>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
