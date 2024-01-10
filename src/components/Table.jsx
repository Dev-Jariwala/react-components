import React from "react";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Product Name</th>
          <th>Retail Price</th>
          <th>WholeSale Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Firki 1</td>
          <td>300</td>
          <td>280</td>
          <td>30</td>
          <td>
            <button type="button" className="btn-outline success">
              Edit
            </button>
            <button type="button" className="btn-outline danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Firki 2</td>
          <td>300</td>
          <td>280</td>
          <td>30</td>
          <td>
            <button type="button" className="btn-outline success">
              Edit
            </button>
            <button type="button" className="btn-outline danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Firki 3</td>
          <td>300</td>
          <td>280</td>
          <td>30</td>
          <td>
            <button type="button" className="btn-outline success">
              Edit
            </button>
            <button type="button" className="btn-outline danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Firki 4</td>
          <td>300</td>
          <td>280</td>
          <td>30</td>
          <td>
            <button type="button" className="btn-outline success">
              Edit
            </button>
            <button type="button" className="btn-outline danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Firki 5</td>
          <td>300</td>
          <td>280</td>
          <td>30</td>
          <td>
            <button type="button" className="btn-outline success">
              Edit
            </button>
            <button type="button" className="btn-outline danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
