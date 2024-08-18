import { useState, useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

function Example({ show, setShow, ChartInfo }) {
  // states to handle the input fields vallue
  const [cpuUsage, setcpuUsage] = useState();
  const [memoryUsage, setmemoryUsage] = useState();
  const [status, setstatus] = useState();
  const handleClose = () => setShow(false);
  const serverChangeFunc = (e) => {
    const selectedServerId = parseInt(e.target.value);

    const server = ChartInfo.chartData.find(
      (server) => server.id === selectedServerId
    );

    setcpuUsage(server.cpu);
    setmemoryUsage(server.memory);
    setstatus(server.status);
  };
  useEffect(() => {
    setcpuUsage(ChartInfo && ChartInfo.chartData && ChartInfo.chartData[0].cpu);
    setmemoryUsage(
      ChartInfo && ChartInfo.chartData && ChartInfo.chartData[0].memory
    );
    setstatus(
      ChartInfo && ChartInfo.chartData && ChartInfo.chartData[0].status
    );
  }, [ChartInfo, show]);
  const renderTooltip = (props, s) => (
    // doing it dynamically so that no need to pass statically here
    <Tooltip id="button-tooltip" {...props}>
      {s}
    </Tooltip>
  );

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        className="mt-3"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 fw-bold text-success">
            {`${ChartInfo.chartName} Information`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <label className="">Servers</label>
            <select
              className="form-control"
              onChange={(e) => serverChangeFunc(e)}
            >
              {ChartInfo &&
                ChartInfo.chartData &&
                ChartInfo.chartData.map((li) => {
                  return (
                    <option key={li.id} value={li.id}>
                      {li.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mb-2">
            <label className="" id="cpuUsage">
              CPU Usage
            </label>
            <input
              type="text"
              className="form-control"
              disabled={true}
              value={cpuUsage}
              placeholder="Please select the server to get details"
            />
          </div>
          <div className="mb-2">
            <label className="" id="cpuUsage">
              Memory Usage
            </label>
            <input
              type="text"
              className="form-control "
              disabled={true}
              value={memoryUsage}
              placeholder="Please select the server to get details"
            />
          </div>
          <div className="mb-2">
            <label className="" id="cpuUsage">
              Status
            </label>
            <input
              type="text"
              className={
                status === "active"
                  ? "form-control bg-success text-dark fw-semibold"
                  : "form-control bg-danger text-light fw-semibold"
              }
              disabled={true}
              value={status}
              placeholder="Please select the server to get details"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning mt-2" onClick={handleClose}>
            Close
          </Button>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={(props) =>
              renderTooltip(
                props,
                "This is just an example Modal which shows how to render modal and handle data inside"
              )
            }
          >
            <i class="ri-lightbulb-line fs-2 text-warning text-bolder"></i>
          </OverlayTrigger>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
