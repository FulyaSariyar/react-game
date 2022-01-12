import React from "react";

import TwitterIcon from "../../../assets/images/twitter/twitter.png";

const TwitterShareButton = React.memo(props => {
  const text = "Welcome to 8bit React-Game  -  @fulyasariyar";

  const url = "https://github.com/FulyaSariyar";

  const hashtags = "reactGame,javascript,js,reactjs,animation";

  return (
    <img
      name="TwitterShareButton"
      style={{ cursor: "pointer" }}
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`,
          "name",
          "width=600,height=400"
        )
      }
      alt="Twitter Icon"
      src={TwitterIcon}
      width="150"
    />
  );
});

export default TwitterShareButton;
