import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

function Table({ bracketName, arr }) {
  return (
    <>
      <h2 className="font-bold">{bracketName}</h2>
      <table>
        <tbody className="">
          <tr className="bg-slate-700">
            <th className="p-3">#</th>
            <th className="text-left w-52 pl-2">Name</th>
            <th className="text-cetner pr-2">DXP Competition</th>
          </tr>
          {arr.length > 0 ? (
            arr.map((userArr, counter) => {
              counter += 1;
              return (
                <tr key={userArr._id} className="odd:bg-slate-800">
                  <td className="text-center">{counter}</td>

                  {/* Avatar Icon */}
                  <td className="flex items-center py-2 hover:underline space-x-1">
                    <Avatar data={userArr} width={30} height={30} />
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
              <td colSpan={2} className="py-2">
                No one yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
