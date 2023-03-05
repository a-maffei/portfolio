import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ale from "./img/alessandra.jpeg";

export default function Story() {
  const [longStory, setLongStory] = useState(false);

  const storyHandler = () => {
    setLongStory(!longStory);
  };

  return (
    <div>
      <h2>My story</h2>
      <div>
        <button onClick={storyHandler}>
          {longStory ? "tl;dr" : "long story"}
        </button>
      </div>
      {longStory ? (
        <div>
          <p>This is the long story!</p>
        </div>
      ) : (
        <div>
          <p>This is the short story</p>
        </div>
      )}
      <img src={ale} style={{ width: "200px" }}></img>
    </div>
  );
}
