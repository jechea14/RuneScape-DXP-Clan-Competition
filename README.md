# RuneScape-DXP-Clan-Competition

A RuneScape hiscores tracking and analysis website for a double experience competition of a RuneScape clan/guild (Elite Team Killerz). Guild members are separated into brackets based on total level for fair competition. Users can view rankings of each bracket on the homepage and view guild member's skills in their respective profile page.

## Website: https://runescape-dxp-clan-competition.vercel.app

## API

base url: https://etk-double-xp.onrender.com

`GET` `/api/data` : Retrieves all player data

`GET` `/api/player/[id]` : Retrieves individual player data

## Stack: MERN

Frontend:

- Next.js

Backend & API:

- Runtime: Node.js
- API Framework: Express
- ODM: Mongoose
- Database: MongoDB
- Cronjobs

- Note: May change database to Postgresql or Mysql
