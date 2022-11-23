import "./common.scss";
import "./overview.scss";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getCategories } from "utils/api";
import JokeCard from "components/joke/joke-card";
import ArrowDownIcon from "assets/icon-arrow-down.png";
import { getCategoryClassName, SHOWING_COUNT } from "./utils";

const OverviewPage = ({ jokes = [], onSelectJoke = () => {} }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewingAll, setViewingAll] = useState(false);
  const [showingCount, setShowingCount] = useState(SHOWING_COUNT);

  const filteredJokes = useMemo(() => {
    if (!selectedCategory) return jokes;
    return jokes.filter((joke) => joke.categories.includes(selectedCategory));
  }, [jokes, selectedCategory]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resCategories = await getCategories();

      setCategories(resCategories);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="categories">
        {categories.slice(0, viewingAll ? categories.length : 7).map((cat) => (
          <div
            key={cat}
            className={`category-tag ${getCategoryClassName(cat)} ${
              cat === selectedCategory ? "category__selected" : ""
            }`}
            aria-hidden
            onClick={() => setSelectedCategory(cat)}
          >
            <p>{`${cat} jokes`}</p>
          </div>
        ))}
        <div
          className="view-all-btn"
          aria-hidden
          onClick={() => setViewingAll((pre) => !pre)}
        >
          <p>view {viewingAll ? "less" : "all"}</p>
          {!viewingAll && <img src={ArrowDownIcon} alt="more-icon" />}
        </div>
      </div>
      <div className="jokes">
        {selectedCategory && (
          <div className="jokes-header">
            <div
              className={`${getCategoryClassName(
                selectedCategory
              )} category-badge`}
            >
              <p>{`${selectedCategory} jokes`}</p>
            </div>
          </div>
        )}
        {filteredJokes.length ? (
          <Fragment>
            <div className="jokes-grid">
              {filteredJokes.slice(0, showingCount).map((joke) => (
                <JokeCard
                  key={joke?.value}
                  value={joke?.value}
                  category={joke?.categories[0]}
                  id={joke.id}
                  url={joke.ur}
                  onSelect={() => onSelectJoke(joke)}
                />
              ))}
            </div>
            <div
              className="view-more-btn"
              aria-hidden
              onClick={() => setShowingCount((pre) => pre + SHOWING_COUNT)}
            >
              <p>view more</p>
              <img src={ArrowDownIcon} alt="more-icon" />
            </div>
          </Fragment>
        ) : (
          <p className="empty">No related joke found!</p>
        )}
      </div>
    </main>
  );
};

export default OverviewPage;
