import React from 'react'
import axios from "axios";

export default function Player({playerData}) {

      return (
        <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Starting XP</th>
            <th>XP Gained</th>
            <th>Total XP</th>
          </tr>
        </thead>
        <tbody>
          {playerData[0].xpDeltas.map((delta, index) => (
            <tr key={index}>
              <td>{Object.keys(delta)[0].replace("Diff", "")}</td>
              <td>{playerData[0].latestXp[0][Object.keys(delta)[0].replace("Diff", "").toLowerCase()]}</td>
              <td>{Object.values(playerData[0].dxpCompResults[index])[0]}</td>
              <td>{Object.values(playerData[0].latestXp[0])[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/data/player/${context.params.id}`);
    const playerData = await res.json()

    return {
        props: {
            playerData
        }
    }
}