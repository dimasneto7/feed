import React from "react";

export const Post = (props) => {
  return (
    <div>
      <h1>Post</h1>
      <p>
        <strong>{props.author}</strong>
      </p>
      <p>{props.content}</p>
    </div>
  );
};
