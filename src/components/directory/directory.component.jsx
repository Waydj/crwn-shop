import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default Directory;
