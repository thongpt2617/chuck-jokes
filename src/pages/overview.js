import "./overview.scss";
import { useEffect, useMemo, useState } from "react";
import { getAllJokes, getCategories } from "utils/api";
import JokeCard from "components/joke/joke-card";

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

const OverviewPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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
        {categories.map((cat) => (
          <div
            key={cat}
            className={`${getCategoryClassName(cat)} ${
              cat === selectedCategory ? "category__selected" : ""
            }`}
            aria-hidden
            onClick={() => setSelectedCategory(cat)}
          >{`${cat} jokes`}</div>
        ))}
      </div>
      <div className="jokes">
        {selectedCategory && (
          <div
            className={`${getCategoryClassName(
              selectedCategory
            )} category__badge`}
          >{`${selectedCategory} jokes`}</div>
        )}
        {filteredJokes.length ? (
          <div className="jokes-grid">
            {filteredJokes.map((joke) => (
              <JokeCard
                value={joke?.value}
                category={joke?.categories[0]}
                id={joke.id}
                url={joke.ur}
              />
            ))}
          </div>
        ) : (
          <p className="empty">No related joke found!</p>
        )}
      </div>
    </main>
  );
};

export default OverviewPage;
