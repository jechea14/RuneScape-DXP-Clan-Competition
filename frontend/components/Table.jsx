import Link from "next/link";
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
        <tr className="bg-[#111111]">
          <th>#</th>
          <th className="text-left">Name</th>
          <th className="text-right pr-2">DXP Competition</th>
        </tr>
        {arr.length > 0 ? (
          arr.map((userArr, counter) => {
            counter += 1;
            return (
              <tr key={userArr._id} className="odd:bg-[#111111]">
                <td className="text-center">{counter}</td>

                <td className="p-2 hover:underline">
                  <Link href={`/player/${userArr._id}`}>{userArr._id}</Link>
                </td>

                <td className="text-right pr-2">
                  {Intl.NumberFormat("en-US").format(userArr.dxpComptotal)}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td></td>
            <td colSpan={2}>No one yet!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
