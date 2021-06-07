import React, { Component } from "react";
import { render } from "react-dom";
import PmContainer from "../components/pm_container/index";
import "./index.scss";
export default () => {
  return (
    <div className="body">
      <PmContainer pm_number={100} />
    </div>
  );
};
