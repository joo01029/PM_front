import React, { Component } from "react";
import "./pm_status.scss";
interface getPmState {
  pm_value: string;
}

export default ({ pm_value }: getPmState) => {
  return <div className="value">{pm_value}</div>;
};
