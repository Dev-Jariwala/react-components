import React from "react";
import Pagination from "./Pagination";
import "./table.css";
import Table from "./Table";
import TableFeatures from "./TableFeatures";
const TableWrapper = ({ tableName }) => {
  return (
    <div className="table-container">
      <div className="table-head">{tableName}</div>
      <div className="table-content">
        <TableFeatures />
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default TableWrapper;
