import "./details.scss";
import ArrowLeftIcon from "assets/icon-arrow-left.png";
import NavigationButton from "components/buttons/navigation-button";
import ReactionButton from "components/buttons/reaction-button";
import { getCategoryClassName } from "./utils";

const DetailsPage = ({
  details = {},
  onChangeJoke = () => {},
  jokes = [],
  onBack = () => {},
}) => {
  console.log({ details });
  const category = details?.categories[0] || "uncategorized";
  const index = jokes.findIndex((joke) => joke.id === details.id) + 1;

  return (
    <main className="details-page">
      <div className="top-actions">
        <button className="back-btn">
          <img src={ArrowLeftIcon} alt="icon" onClick={onBack} />
        </button>
      </div>
      <div className="content">
        <div className="left">
          <div className="left-card">
            <div className="left-card-header">
              <div className={`badge ${getCategoryClassName(category)}`}>
                <p>{`• ${category}`}</p>
              </div>
              <p className="left-card-header-tag">• trending</p>
            </div>
            <div className="left-card-content">
              <div className="left-card-content-title">
                <h1>{`${details.value.substring(0, 20)}...`}</h1>
                <div />
                <p>NO #{index}</p>
              </div>
              <p>{details.value}</p>
            </div>
          </div>
          <div className="left-actions">
            <div className="reactions">
              <ReactionButton />
              <ReactionButton isDisliked />
            </div>
            <div className="navigations">
              <NavigationButton isPrevious entity="joke" />
              <NavigationButton entity="joke" />
            </div>
          </div>
        </div>
        <div className="right">
          <h1>the top 10 jokes this week</h1>
          {jokes.slice(0, 10).map((joke) => (
            <p>{joke.value.substring(0, 30)}...</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
