import "./App.css";
import { useEffect, useState } from "react";
import TopicAdder from "./components/TopicAdder";
import TopicList from "./components/TopicList";
import { topicService } from "./services/topicService";

function App() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  const getAllTopics = async () => {
    const { res, error } = await topicService.getAllTopics();
    if (!error) {
      setTopics(res);
    } else {
      setError(res);
    }
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  return (
    <div className="main-container">
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <TopicAdder topics={topics} setTopicsAdder={setTopics} />
      {topics.length > 0 ? (
        <TopicList getAllTopics={getAllTopics} topics={topics} setTopicsAdder={setTopics}/>
      ) : (
        <div className="no-topics">
          <h1>No topics!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
