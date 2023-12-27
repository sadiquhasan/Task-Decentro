import Table from "./component/Table";
import Form from "./component/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(false);

  return (
    <div className="App">
      <div className="flex justify-content-center align-items-center mt-4">
        <buton
          style={{ fontSize: "larger" }}
          className="btn btn-link mx-3"
          onClick={() => setTask(false)}
        >
          Form
        </buton>
        <buton
          style={{ fontSize: "larger" }}
          className="btn btn-link mx-3"
          onClick={() => setTask(true)}
        >
          Task
        </buton>
      </div>

      {task ? <Table /> : <Form />}
    </div>
  );
}

export default App;
