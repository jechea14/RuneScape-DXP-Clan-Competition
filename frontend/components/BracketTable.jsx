import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

function BracketTable({ bracketName, arr }) {
  return (
    <>
      <h2 className="font-bold">{bracketName}</h2>
      <table>
        <tbody className="">
          <tr className="bg-slate-700">
            <th className="text-left w-52 p-2">Name</th>
            <th className="text-right pr-2">Total Level</th>
          </tr>
          {arr.length > 0 ? (
            arr.map((userArr) => {
              return (
                <tr key={userArr._id} className="odd:bg-slate-800">
                  <td className="flex items-center p-2 hover:underline">
                    <Avatar data={userArr} width={30} height={30} />
                    <Link href={`/player/${userArr._id}`}>{userArr._id}</Link>
                  </td>
                  {/* Total level */}
                  <td className="text-right pr-2">
                    {userArr.totalLevelBeforeDxp}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={2} className="py-2">
                No data available yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default BracketTable;
