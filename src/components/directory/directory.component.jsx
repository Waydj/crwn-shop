import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, title, imageUrl }) => (
        <DirectoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
