import React from "react";
import dummyData from "../static/storyProfile";
import Content from "./Content";

const Contents = () => {
  return (
    <div>
      {dummyData.map((data) => {
        return <Content key={data.id} data={data}></Content>;
      })}
    </div>
  );
};

export default Contents;
