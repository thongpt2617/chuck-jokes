import "./overview.scss";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getAllJokes, getCategories } from "utils/api";
import JokeCard from "components/joke/joke-card";
import ArrowDownIcon from "assets/icon-arrow-down.png";

const getCategoryClassName = (category) => {
  let postFix = "";
  switch (category) {
    case "animal":
    case "history":
    case "sport":
      postFix = "a";
      break;
    case "career":
    case "money":
    case "travel":
      postFix = "b";
      break;
    case "celebrity":
    case "movie":
      postFix = "c";
      break;
    case "dev":
    case "music":
      postFix = "d";
      break;
    case "explicit":
    case "political":
      postFix = "e";
      break;
    case "fashion":
    case "religion":
      postFix = "f";
      break;
    default:
      postFix = "default";
      break;
  }
  return `category-${postFix}`;
};

const SHOWING_COUNT = 6;

const OverviewPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
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
      const resAllJokes = await getAllJokes();
      const resCategories = await getCategories();

      setJokes(resAllJokes?.result || []);
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
            className={`${getCategoryClassName(cat)} ${
              cat === selectedCategory ? "category__selected" : ""
            }`}
            aria-hidden
            onClick={() => setSelectedCategory(cat)}
          >
            <p>{`${cat} jokes`}</p>
          </div>
        ))}
        <div
          className="view_all_btn"
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
              )} category__badge`}
            >{`${selectedCategory} jokes`}</div>
          </div>
        )}
        {filteredJokes.length ? (
          <Fragment>
            <div className="jokes-grid">
              {filteredJokes.slice(0, showingCount).map((joke) => (
                <JokeCard
                  value={joke?.value}
                  category={joke?.categories[0]}
                  id={joke.id}
                  url={joke.ur}
                />
              ))}
            </div>
            <div
              className="view_more_btn"
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
