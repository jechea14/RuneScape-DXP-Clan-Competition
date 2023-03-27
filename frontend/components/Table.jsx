import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

function Table({ bracketName, arr }) {
  return (
    <>
      <h2 className="font-bold">{bracketName}</h2>
      <table>
        <tbody className="">
          <tr className="bg-[#111111]">
            <th className="p-3">#</th>
            <th className="text-left w-52">Name</th>
            <th className="text-right pr-2">DXP Competition</th>
          </tr>
          {arr.length > 0 ? (
            arr.map((userArr, counter) => {
              counter += 1;
              return (
                <tr key={userArr._id} className="odd:bg-[#111111]">
                  <td className="text-center">{counter}</td>

                  <td className="flex items-center py-2 hover:underline">
                    <Avatar data={userArr} />
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
