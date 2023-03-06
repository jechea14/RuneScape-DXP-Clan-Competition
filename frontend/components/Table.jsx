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
            <tr key={userArr[0]._id}>
              <td>{counter}</td>
              <td>{userArr[0]._id}</td>
              <td>{userArr[0].dxpComptotal.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
