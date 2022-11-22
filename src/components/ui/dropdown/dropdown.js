import "./dropdown.scss";

const Dropdown = ({
  isOpened = false,
  onToggle = () => {},
  options = [],
  onSelect = () => {},
}) => {
  return (
    <div className="anchor">
      {isOpened && (
        <div className="dropdown">
          {options.map((opt) => (
            <p
              key={opt?.name}
              className={`${opt?.isHighlighted ? "highlighted" : ""}`}
              onClick={() => {
                onSelect(opt);
                onToggle();
              }}
            >
              {opt.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
