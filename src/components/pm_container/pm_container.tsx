import React, { Component } from "react";
import changePmState from "../../lib/changePmStete";
import PmState from "../pm_status/index";
import PmNumber from "../pm_number/index";
import "./pm_container.scss";

interface getPmData {
  pm_number: number;
}

interface changePmStateInterface {
  pm_color: string;
  pm_value: string;
}

export default ({ pm_number }: getPmData) => {
  const { pm_color, pm_value }: changePmStateInterface = changePmState(
    pm_number
  );

  const containerStyle = {
    borderColor: pm_color,
  };

  return (
    <div className="container" style={containerStyle}>
      <PmState pm_value={pm_value} />
      <PmNumber pm_number={pm_number} />
    </div>
  );
};
