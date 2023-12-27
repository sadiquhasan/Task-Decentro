import React, { useState } from "react";

const Table = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const [rowArray, setrowArray] = useState([]);
  const [columnArray, setcolumnArray] = useState([]);

  const createRows = () => {
    const res = [];
    let rowValue = parseInt(rows);
    for (let i = 0; i < rowValue; i++) {
      res.push(i);
    }
    setrowArray(res);
  };
  const createColumns = () => {
    const res = [];
    let columnValue = parseInt(columns);
    for (let i = 0; i < columnValue; i++) {
      res.push(i);
    }

    setcolumnArray(res);
  };

  const createTable = () => {
    createColumns(columns);
    createRows(rows);
  };

  return (
    <div className="mt-5 mx-auto">
      <div className="w-100 d-flex justify-content-around align-items-center mb-4">
        <input
          type="number"
          onChange={(e) => setRows(e.target.value)}
          className="px-2"
          placeholder="Enter row"
        />
        <input
          type="number"
          onChange={(e) => setColumns(e.target.value)}
          className="px-2"
          placeholder="Enter columns"
        />
      </div>
      <div className="text-center mb-4">
        <button
          onClick={createTable}
          className="btn btn-primary shadow rounded-0"
        >
          Create Table
        </button>
      </div>
      <table class="table table-bordered">
        {columnArray?.map((res) => (
          <tr>
            {rowArray?.map((col) => (
              <td className="p-4 m-2" style={{ border: "1px solid gray" }}></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
