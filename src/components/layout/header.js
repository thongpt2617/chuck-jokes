import "./header.scss";
import SearchIcon from "assets/icon-search.png";

const Header = () => {
  return (
    <section className="header">
      <h1>The Joke Bible</h1>
      <p>Daily Laughs for you and yours</p>
      <div className="search-input">
        <input placeholder="How to make you laugh today?" />
        <img src={SearchIcon} alt="search-icon" />
      </div>
    </section>
  );
};

export default Header;
