import "./joke-card.scss";
import OrangeLightIcon from "assets/icon-light-orange.png";
import ArrowLtrIcon from "assets/icon-arrow-ltr.png";

const JokeCard = ({ value, category, id, url }) => {
  return (
    <section className="card">
      <h1>
        <img src={OrangeLightIcon} alt="icon" />
        <span>{`${!!category ? category : "uncategorized"} joke`}</span>
      </h1>
      <p>{value}</p>
      <div className="action">
        <button>
          <span>see stats</span>
          <img src={ArrowLtrIcon} alt="arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default JokeCard;
