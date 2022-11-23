import { useState, useEffect } from "react";
import Layout from "components/layout/layout";
import DetailsPage from "pages/details";
import OverviewPage from "pages/overview";
import { getAllJokes } from "utils/api";

function App() {
  const [selectedJoke, setSelectedJoke] = useState(null);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    (async () => {
      const resAllJokes = await getAllJokes();

      setJokes(resAllJokes?.result || []);
    })();
  }, []);

  return (
    <Layout>
      {selectedJoke ? (
        <DetailsPage
          details={selectedJoke}
          jokes={jokes}
          onBack={() => setSelectedJoke(null)}
          onChangeJoke={setSelectedJoke}
        />
      ) : (
        <OverviewPage jokes={jokes} onSelectJoke={setSelectedJoke} />
      )}
    </Layout>
  );
}

export default App;
