import { Separator } from "../ui/separator";

export const Leaderboard = ({ gameData }) => {
  return (
    <div>
      <h2>Bảng xếp hạng</h2>
      <ul>
        {gameData.map((player, index) => (
          <li
            key={index}
            style={{
              fontWeight: index < 3 ? "bold" : "normal",
            }}
          >
            {index + 1}. {player.name} - Điểm: {player.score}
          </li>
        ))}
      </ul>
      <Separator className="my-4" />
    </div>
  );
};
