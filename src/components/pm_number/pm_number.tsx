import React, { Component } from "react";
import "./pm_number.scss";
interface getPmNumber {
  pm_number: number;
}

export default ({ pm_number }: getPmNumber) => {
  return <div className="number">{pm_number}</div>;
};
