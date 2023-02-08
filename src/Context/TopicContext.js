import React, { useState, createContext } from "react";
import { speechTopics } from "../Speech Topics/SpeechTopics";

export const topicContext = createContext();
export const generateTopicContext = createContext();

function TopicContextProvider({ children }) {
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");

  const topicGenerator = () => {
    let filteredTopics = speechTopics.filter(
      (topic, index) => !usedIndex.includes(index)
    );

    const randomIndex = Math.floor(Math.random() * filteredTopics.length);
    setCurrentTopic(filteredTopics[randomIndex]);

    filteredTopics.length > 1
      ? speechTopics.map(
          (topic, index) =>
            topic === filteredTopics[randomIndex] &&
            setUsedIndex([...usedIndex, index])
        )
      : setUsedIndex([]);
  };

  return (
    <generateTopicContext.Provider value={topicGenerator}>
      <topicContext.Provider value={currentTopic}>
        {children}
      </topicContext.Provider>
    </generateTopicContext.Provider>
  );
}

export default TopicContextProvider;
