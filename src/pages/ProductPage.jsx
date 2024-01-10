import React, { useState } from "react";
import "./style.css";
import TableWrapper from "../components/TableWrapper";
import tableData from "../assets/tableData";
const ProductPage = () => {
  const [products, setProducts] = useState(tableData);
  return (
    <div className="container">
      <TableWrapper tableName={"Product Table"} data={products}></TableWrapper>
    </div>
  );
};

export default ProductPage;
