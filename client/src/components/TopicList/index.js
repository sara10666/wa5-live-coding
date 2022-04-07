import "./styles.css";
import Topic from "../Topic";
import { topicService } from "../../services/topicService";

function TopicList({ topics, setTopicAdder, getAllTopics }) {
  async function handleVoting (id, direction) {
    if (direction === "up") {
      const {error} = await topicService.upvoteTopic(id);
      if (!error) {
        getAllTopics();
      } 
    } else if (direction === "down") {
      const {error} = await topicService.downvoteTopic(id);
      if (!error) {
        getAllTopics();
      }
    }
  }

  async function handleDelete (id) {
    const {error} = await topicService.deleteTopic(id);
    if (!error) {
      getAllTopics();
    }
  }
  return (
    <div className="topic-list-container">
      {topics.map((topic) => (
        <Topic
          key={topic._id}
          topic={topic}
          handleVoting={handleVoting}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TopicList;
