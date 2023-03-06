import React from "react";

function Table({ bracketName, arr }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{bracketName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>DXP Competition</th>
        </tr>
        {arr.map((userArr, counter) => {
          counter += 1;
          return (
            <tr key={userArr._id}>
              <td>{counter}</td>
              <td>{userArr._id}</td>
              <td>{userArr.dxpComptotal.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
