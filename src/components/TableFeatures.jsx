import React from "react";

const TableFeatures = () => {
  return (
    <div className="table-features">
      <div className="page-size-dropdown">
        <select id="pageSize">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </div>
  );
};

export default TableFeatures;
