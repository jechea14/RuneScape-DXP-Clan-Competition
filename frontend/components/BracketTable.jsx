import Link from "next/link";
import React from "react";

function BracketTable({ bracketName, arr }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{bracketName}</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="bg-[#111111]">
          <th className="text-left">Name</th>
          <th className="text-right pr-2">Total Level</th>
        </tr>
        {arr.length > 0 ? (
          arr.map((userArr) => {
            return (
              <tr key={userArr._id} className="odd:bg-[#111111]">
                <td className="p-2 hover:underline">
                  <Link href={`/player/${userArr._id}`}>{userArr._id}</Link>
                </td>

                <td className="text-right pr-2">
                  {userArr.totalLevelBeforeDxp}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td></td>
            <td colSpan={2}>No one</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default BracketTable;
