import React from 'react'

export default function Player({playerData}) {
      return (
        <table>
        <thead>
          <tr>
            <td></td>
            <td>Current Xp</td>
            <td>XP Gained</td>
            <td>DXP Comp</td>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(playerData[0].latestXp).map((keyName, keyIndex) => {
                if(keyName === '_id') {
                    return null
                }
                return (
                    <tr key={keyIndex}>
                        <td>{keyName}</td>
                        <td>{playerData[0].latestXp[keyName]}</td>
                        <td className='text-green-800 font-bold'>{playerData[0].xpDeltas[keyName]}</td>
                        <td>{playerData[0].dxpCompResults[keyName]}</td>
                    </tr>
                )
            })
          }
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