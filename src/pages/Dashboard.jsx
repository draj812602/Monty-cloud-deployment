import React, { useState, useEffect } from "react";
import ChartTest from "../components/charts/Charts";
import NotificationsComp from "../components/Notifications";
import CustModal from "../components/Modal";

import { useGlobalState } from "../context/GlobalContext";

import { mockData } from "../data/MockData";
const Dashboard = () => {
  // onlclick chart data
  const [ChartInfo, setChartInfo] = useState([]);

  // Modal states
  const [show, setShow] = useState(false);
  // modal functions

  const settingClickFun = (chartName, chartData) => {
    setShow(true);
    let d = {
      chartName: chartName,
      chartData: chartData,
    };

    setChartInfo(d);
  };

  return (
    <>
      {/* Mocking a loop to show more data / charts on UI */}
      {Array.from({ length: 2 }).map((_, index) => (
        <ChartTest data={mockData} settingClickFun={settingClickFun} />
      ))}

      <CustModal show={show} setShow={setShow} ChartInfo={ChartInfo} />
      {/* <NotificationsComp /> */}
    </>
  );
};

export default Dashboard;
