import { useState } from "react";

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
    </div>
  );
}
