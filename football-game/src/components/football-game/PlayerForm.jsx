import { useState } from 'react';

export const PlayerForm = ({ setPlayers }) => {
  const [playerList, setPlayerList] = useState([]);

  const handleAddPlayer = () => {
    if (playerList.length < 5) {
      setPlayerList([
        ...playerList,
        {
          name: `Player ${playerList.length + 1}`,
          number: playerList.length + 1,
          defense: Math.floor(Math.random() * 5) + 1,
          techniques: getRandomTechniques(5),
        },
      ]);
    } else {
      alert('Bạn đã đủ 10 cầu thủ!');
    }
  };

  const handleSubmit = () => {
    setPlayers(playerList);
  };

  const getRandomTechniques = (count) => {
    const techniques = [
      { name: 'Neymar Rainbow Flick', difficulty: 6 },
      { name: 'El Tornado', difficulty: 6 },
      { name: 'Waka Waka', difficulty: 5 },
      { name: 'Sombrero Flick', difficulty: 5 },
      { name: 'Okocha Sombrero Flick', difficulty: 4 },
      { name: 'Bolasie Flick', difficulty: 4 },
      { name: 'Fake Pass', difficulty: 3 },
      { name: 'Ball Roll Chop', difficulty: 3 },
      { name: 'Ball Roll Cut', difficulty: 3 },
      { name: 'Simple Rainbow', difficulty: 2 },
    ];
    return techniques.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  return (
    <div>
      <h2>Thêm cầu thủ</h2>
      <button onClick={handleAddPlayer}>Thêm cầu thủ</button>
      <button onClick={handleSubmit}>Bắt đầu trò chơi</button>
      <ul>
        {playerList.map((player, index) => (
          <li key={index}>
            {player.name} - Áo số {player.number} - Phòng thủ {player.defense}
          </li>
        ))}
      </ul>
    </div>
  );
};
