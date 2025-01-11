import { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const CheckPassing = (techniqueScore, defenseScore) => {
  const defensiveRatio = defenseScore / (techniqueScore + defenseScore);
  return Math.random() < defensiveRatio ? 0 : 1;
};

export const GameLogic = ({ players, setGameData }) => {
  const [currentPlayers, setCurrentPlayers] = useState([...players]);
  const [penalizedPlayers, setPenalizedPlayers] = useState([]);
  const [turnHistory, setTurnHistory] = useState([]);

  useEffect(() => {
    if (currentPlayers.length === 1) {
      calculateScores();
    }
  }, [currentPlayers]);

  const handleNextTurn = () => {
    const passer = getRandomPlayer();
    const receiver = getRandomPlayer(passer);

    if (!passer || !receiver) {
      console.log("Người chuyền bóng hoặc người nhận bóng chưa được xác định");
      return;
    }

    const technique =
      passer.techniques[Math.floor(Math.random() * passer.techniques.length)];
    const success = CheckPassing(technique.difficulty, receiver.defense);

    const newTurn = {
      passer: passer.name,
      receiver: receiver.name,
      technique: technique.name,
      success,
    };

    setTurnHistory((prev) => [...prev, newTurn]);

    if (!success) {
      penalizePlayer(passer);
    }
  };

  const getRandomPlayer = (exclude) => {
    const availablePlayers = currentPlayers.filter(
      (player) => player !== exclude
    );
    if (availablePlayers.length === 0) {
      console.log("Không có người chơi nào để lựa chọn!");
      return null;
    }
    return availablePlayers[
      Math.floor(Math.random() * availablePlayers.length)
    ];
  };

  const penalizePlayer = (player) => {
    setPenalizedPlayers([...penalizedPlayers, player]);
    setCurrentPlayers(currentPlayers.filter((p) => p !== player));
  };

  const calculateScores = () => {
    const scores = players.map((player) => {
      const firstPenaltyIndex = penalizedPlayers.findIndex(
        (p) => p.name === player.name
      );
      const penaltyBonus =
        firstPenaltyIndex === -1 ? 0 : 10 - (firstPenaltyIndex + 1);
      const techniqueBonus = player.techniques.reduce(
        (sum, t) => sum + t.difficulty,
        0
      );
      return {
        ...player,
        score: penaltyBonus + techniqueBonus,
      };
    });

    setGameData(scores.sort((a, b) => b.score - a.score));
  };

  return (
    <div>
      <h2>Trò chơi đang diễn ra</h2>
      <Button onClick={handleNextTurn}>Chuyền bóng</Button>
      <h3 className="font-bold">Người chơi hiện tại:</h3>
      <ul>
        {currentPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - Áo số {player.number}
          </li>
        ))}
      </ul>
      <h3 className="font-bold">Lịch sử lượt chơi:</h3>
      <ul>
        {turnHistory.map((turn, index) => (
          <li key={index}>
            {turn.passer} chuyền cho {turn.receiver} bằng {turn.technique} -{" "}
            {turn.success ? "Thành công" : "Thất bại"}
          </li>
        ))}
      </ul>
      <Separator className="my-4" />
    </div>
  );
};
