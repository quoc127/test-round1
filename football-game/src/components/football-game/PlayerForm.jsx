import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const PlayerForm = ({ setPlayers }) => {
  const [playerList, setPlayerList] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");

  const handleAddPlayer = () => {
    if (playerList.length >= 5) {
      alert("Bạn đã đủ 5 cầu thủ!");
      return;
    }

    if (!playerName || !playerNumber) {
      alert("Vui lòng nhập tên và số áo cầu thủ!");
      return;
    }

    if (playerList.some((player) => player.number === playerNumber)) {
      alert("Số áo đã tồn tại, vui lòng chọn số áo khác!");
      return;
    }

    setPlayerList([
      ...playerList,
      {
        name: playerName,
        number: Number(playerNumber),
        defense: Math.floor(Math.random() * 5) + 1,
        techniques: getRandomTechniques(5),
      },
    ]);

    setPlayerName(""); 
    setPlayerNumber("");
  };

  const handleSubmit = () => {
    setPlayers(playerList);
  };

  const getRandomTechniques = (count) => {
    const techniques = [
      { name: "Neymar Rainbow Flick", difficulty: 6 },
      { name: "El Tornado", difficulty: 6 },
      { name: "Waka Waka", difficulty: 5 },
      { name: "Sombrero Flick", difficulty: 5 },
      { name: "Okocha Sombrero Flick", difficulty: 4 },
      { name: "Bolasie Flick", difficulty: 4 },
      { name: "Fake Pass", difficulty: 3 },
      { name: "Ball Roll Chop", difficulty: 3 },
      { name: "Ball Roll Cut", difficulty: 3 },
      { name: "Simple Rainbow", difficulty: 2 },
    ];
    return techniques.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Tên cầu thủ"
          className="border rounded p-2 mr-2"
        />
        <input
          type="number"
          value={playerNumber}
          onChange={(e) => setPlayerNumber(e.target.value)}
          placeholder="Số áo"
          className="border rounded p-2 mr-2"
        />
        <Button onClick={handleAddPlayer}>Thêm cầu thủ</Button>
      </div>
      <ul>
        {playerList.map((player, index) => (
          <li key={index}>
            {player.name} - Áo số {player.number} - Phòng thủ {player.defense}
          </li>
        ))}
      </ul>
      <Button
        onClick={handleSubmit}
        className={`mt-4 ${playerList.length === 5 ? "block" : "hidden"}`}
      >
        Bắt đầu trò chơi
      </Button>
      <Separator className="my-4" />
    </div>
  );
};
