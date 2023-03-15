import React from "react";

function Table({ bracketName, arr }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{bracketName}</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="odd:bg-gray-400 p-6">
          <th>#</th>
          <th className="text-left">Name</th>
          <th className="text-right pr-2">DXP Competition</th>
        </tr>
        {arr.map((userArr, counter) => {
          counter += 1;
          return (
            <tr key={userArr._id} className="odd:bg-gray-400">
              <td className="text-center">{counter}</td>
              <td className="p-2">{userArr._id}</td>
              <td className="text-right pr-2">
                {Intl.NumberFormat("en-US").format(userArr.dxpComptotal)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
