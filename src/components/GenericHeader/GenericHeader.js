import React from "react";
import "./GenericHeader.css";

const GenericHeader = (
  { 
    headertext 
  }
  ) => {
  return (
    <div className="GenericHeader">
      <h2>{headertext}</h2>
    </div>
  );
};

GenericHeader.defaultProps = {};

export default GenericHeader;
