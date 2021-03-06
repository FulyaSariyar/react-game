import React from "react";
import SceneObject from "../../SceneObject";

import TwitterShareButton from "./TwitterShareButton";

const EndText = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: "auto", y: "auto" },
      rotation: props.transform.rotation
    }}
  >
    <TwitterShareButton />
    <a
      style={{ textDecoration: "none" }}
      href="https://github.com/FulyaSariyar"
    >
      <h1 style={{ color: "#6B6B6B" }}>
        >View
        <br />
        Source
      </h1>
    </a>

    <a style={{ textDecoration: "none" }} href="https://github.com/FulyaSariyar">
      <h3 style={{ color: "white" }}>by Fulya Sarıyar Abdullah 2022</h3>
    </a>
  </SceneObject>
));
export default EndText;
