import React from "react";
import "./style.scss";

const Title = ({ children, size, bottons }) => {
  return (
    <div>
      <h1 className={`title ${size}`}>
        {children}
        {/* <div className={s.bottons}>{bottons}</div> */}
      </h1>
    </div>
  );
};

export default Title;
