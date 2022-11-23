import "./reaction-button.scss";
import ThumbDownIcon from "assets/icon-thumb-down.png";
import ThumbUpIcon from "assets/icon-thumb-up.png";

const ReactionButton = ({ isDisliked = false, count = 50 }) => {
  return (
    <div className="reaction-btn-container">
      <button
        className={`reaction-btn ${isDisliked ? "dislike-btn" : "like-btn"}`}
      >
        <img alt="icon" src={isDisliked ? ThumbDownIcon : ThumbUpIcon} />
      </button>
      <p className={isDisliked ? "dislike" : "like"}>{count}</p>
    </div>
  );
};

export default ReactionButton;
