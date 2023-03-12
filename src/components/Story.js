import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ale from "./img/alessandra.jpeg";

export default function Story() {
  const [longStory, setLongStory] = useState(false);

  const storyHandler = () => {
    setLongStory(!longStory);
  };

  return (
    <div className="section-cont">
      <h3 className="section-cat-title">Story</h3>
      <h2 className="section-title">More About Me</h2>
      <button onClick={storyHandler} className="main-bttn">
        {longStory ? "Tl;dr" : "Long version"}
      </button>
      <div className="story-main-cont">
        <div className="story-inner-cont">
          {longStory ? (
            <div>
              <p className="story-text">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. <br></br>
                <br></br>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. <br></br>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. <br></br>
                <br></br>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
          ) : (
            <div>
              <p className="story-text">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. <br></br>
                <br></br>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
          )}
        </div>
        <div>
          <img src={ale} className="ale-img"></img>
        </div>
      </div>{" "}
    </div>
  );
}
