import "./navigation-button.scss";
import ArrowLeftIcon from "assets/icon-arrow-left.png";
import ArrowRight from "assets/icon-arrow-right.png";

const NavigationButton = ({ isPrevious = false, entity = "" }) => {
  return (
    <button className="navigation-btn">
      {isPrevious && <img alt="icon" src={ArrowLeftIcon} />}
      <p>{isPrevious ? `prev ${entity}` : `next ${entity}`}</p>
      {!isPrevious && <img alt="icon" src={ArrowRight} />}
    </button>
  );
};

export default NavigationButton;
