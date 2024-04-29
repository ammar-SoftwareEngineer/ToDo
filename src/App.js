import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
let nextId = 0;
function App() {
  let [deviceInput, setDevice] = useState("");
  let [deviceArr, setDeviceArr] = useState([]);
  let arrDevices = deviceArr.map((item) => {
    return (
      <li key={item.id} className=" d-flex justify-content-between ">
        <span>
          {" "}
          {item.id} - {item.name}{" "}
        </span>

        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => {
              editDevice(item.id);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger "
            onClick={() => {
              deleteDevice(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });

  function addDevices() {
    if (deviceInput !== "") {
      setDeviceArr([...deviceArr, { id: nextId + 1, name: deviceInput }]);
      nextId = nextId + 1;
      setDevice((deviceInput = ""));
      clearInput();
    }
  }

  function deleteDevice(id) {
    let newDevices = deviceArr.filter((device) => {
      return device.id !== id;
    });
    id--
    // nextId = nextId - 1 ;
    setDeviceArr(newDevices);
  }

  function editDevice(id) {
    let newDevices = deviceArr.map((device) => {
      if (device.id === id) {
        let newDevice = {
          ...device,

          name: prompt(device.name),
        };
        return newDevice;
      } else {
        return device;
      }
    });
    setDeviceArr(newDevices);
  }
  function clearInput() {
    let input = document.getElementById("input");
    input.value = "";
  }

  return (
    <div className="App  ">
      <div className="py-5 bg-success text-white ">
        <h2>To Do List</h2>
      </div>
      <div className="container mt-5">
        <div className="d-flex  gap-3 mb-4">
          <input
            id="input"
            type="text"
            className="form-control"
            placeholder="Enter Notes"
            onChange={(e) => {
              setDevice(e.target.value);
            }}
          />
          <button
            id="btn"
            type="submit"
            className="btn btn-success"
            onClick={addDevices}
          >
            Add
          </button>
        </div>

        <ul className=" d-flex flex-column gap-4 w-100 ps-2">{arrDevices}</ul>
      </div>
    </div>
  );
}

export default App;
