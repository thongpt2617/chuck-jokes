import { useState } from "react";
import Layout from "components/layout/layout";
import DetailsPage from "pages/details";
import OverviewPage from "pages/overview";

function App() {
  const [selectedJoke, setSelectedJoke] = useState(null);
  return (
    <Layout>
      {selectedJoke ? <DetailsPage details={selectedJoke} /> : <OverviewPage />}
    </Layout>
  );
}

export default App;
