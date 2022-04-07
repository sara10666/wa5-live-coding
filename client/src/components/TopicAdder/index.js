import "./styles.css";
import { useState } from "react";
import { topicService } from "../../services/topicService";

function TopicAdder({ setTopicsAdder, topics }) {
  const [topic, setTopic] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const {res, error} = await topicService.createTopic(topic);
    if (!error) {
      setTopicsAdder([...topics, res]);
      setTopic("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-topics">
      <input
        placeholder="Thread title"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button disabled={topic.length === 0 && true} type="submit">Add Topic</button>
    </form>
  );
}

export default TopicAdder;
