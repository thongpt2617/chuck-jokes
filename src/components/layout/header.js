import "./header.scss";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "assets/icon-search.png";
import BlackSearchIcon from "assets/icon-search-black.png";
import Dropdown from "components/ui/dropdown/dropdown";
import { getSearchJokes } from "utils/api";

const Header = () => {
  const timeout = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (!!searchValue) {
      timeout.current = setTimeout(async () => {
        setShowDropdown(true);
        setLoading(true);
        const res = await getSearchJokes(searchValue);

        setResults(res?.result || []);
        setLoading(false);
      }, 600);
    } else {
      setShowDropdown(false);
      setLoading(false);
    }
  }, [searchValue, timeout]);

  return (
    <section className="header">
      <h1>The Joke Bible</h1>
      <p>Daily Laughs for you and yours</p>
      <div className={`search-input${searchValue ? "__focus" : ""}`}>
        <input
          placeholder="How to make you laugh today?"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src={searchValue ? BlackSearchIcon : SearchIcon}
          alt="search-icon"
        />
      </div>
      <Dropdown
        showRanking
        anchorClassName="dropdown-anchor"
        dropdownClassName="dropdown"
        isOpened={showDropdown}
        onToggle={() => setShowDropdown((pre) => !pre)}
        options={
          loading
            ? [{ name: "Loading..." }]
            : results.length
            ? results.map((re) => ({
                name: `${
                  re.categories[0] ? re.categories[0] : "uncategorized"
                } joke: ${re.value.substring(0, 40)}...`,
              }))
            : [{ name: "No related joke found!" }]
        }
      />
    </section>
  );
};

export default Header;
