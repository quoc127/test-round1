import { useState } from "react";
import { PlayerForm } from "./components/football-game/PlayerForm";
import { GameLogic } from "./components/football-game/GameLogic";
import { Leaderboard } from "./components/football-game/Leaderboard";
import { Chart } from "./components/football-game/Chart";

function App() {
  const [players, setPlayers] = useState([]); 
  const [gameData, setGameData] = useState([]); 
  
  return (
    <div className="grid grid-rows-1 items-center justify-center">
      <h1 className="p-4">Football Passing Game</h1>
      <PlayerForm setPlayers={setPlayers} />
      {players.length >= 5 && (
        <GameLogic players={players} setGameData={setGameData} />
      )}
      {gameData.length > 0 && (
        <>
          <Leaderboard gameData={gameData} />
          <Chart gameData={gameData} />
        </>
      )}
    </div>
  );
}

export default App;
