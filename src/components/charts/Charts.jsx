import React from "react";
import { Col, Row, Tooltip as Ttip, OverlayTrigger } from "react-bootstrap";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];
const Charts = ({ data, settingClickFun }) => {
  const renderTooltip = (props, s) => (
    // doing it dynamically so that no need to pass statically here
    <Ttip id="button-tooltip" {...props}>
      {s}
    </Ttip>
  );

  // For Pie chart we need to Aggreate the data as here I am doing it with active and Inactrive servers
  const statusData = data.reduce((acc, server) => {
    const { status } = server;
    const found = acc.find((item) => item.name === status);
    if (found) {
      found.value += 1;
    } else {
      acc.push({ name: status, value: 1 });
    }
    return acc;
  }, []);

  // Capitalize the status names for display purposes
  const formattedStatusData = statusData.map((item) => ({
    ...item,
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  return (
    <Row className="ps-2">
      <Col lg={4} md={6} className="pe-md-4 pe-lg-0 mb-3">
        <Row>
          <Col lg={11} className="shadow-lg rounded-4 pt-2 pb-3 pe-3 ps-0">
            <div className="d-flex">
              <div className="ms-4  fw-semibold text-success">Line Chart</div>
              <div className="ms-auto">
                {/* MAking use of tooltip */}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 200, hide: 200 }}
                  overlay={(props) => renderTooltip(props, "Settings")}
                >
                  <i
                    className="ri-settings-2-line fw-bolder text-dark"
                    onClick={() => settingClickFun("Line Chart", data)}
                  ></i>
                </OverlayTrigger>
              </div>
            </div>
            <hr className="mt-2" />
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
                <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Col>
      <Col lg={4} md={6} className="pe-md-4 pe-lg-0 mb-3">
        <Row>
          <Col lg={11} className="shadow-lg rounded-4 pt-2 pb-3 pe-3 ps-0">
            <div className="d-flex">
              <div className="ms-4  fw-semibold text-success">Bar Chart</div>
              <div className="ms-auto">
                {/* MAking use of tooltip */}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 200, hide: 200 }}
                  overlay={(props) => renderTooltip(props, "Settings")}
                >
                  <i
                    className="ri-settings-2-line fw-bolder text-dark"
                    onClick={() => settingClickFun("Bar Chart", data)}
                  ></i>
                </OverlayTrigger>
              </div>
            </div>
            <hr className="mt-2" />
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cpu" fill="#8884d8" />
                <Bar dataKey="memory" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Col>
      <Col lg={4} md={6} className="pe-md-4 pe-lg-0 mb-3">
        <Row>
          <Col lg={11} className="shadow-lg rounded-4 pt-2 pb-3 pe-3 ps-0">
            <div className="d-flex">
              <div className="ms-4  fw-semibold text-success">Pie Chart</div>
              <div className="ms-auto">
                {/* MAking use of tooltip */}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 200, hide: 200 }}
                  overlay={(props) => renderTooltip(props, "Settings")}
                >
                  <i
                    className="ri-settings-2-line fw-bolder text-dark"
                    onClick={() => settingClickFun("Pie Chart", data)}
                  ></i>
                </OverlayTrigger>
              </div>
            </div>
            <hr className="mt-2" />
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={formattedStatusData}
                  cx="50%" // Centering the pie chart
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {formattedStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Charts;
