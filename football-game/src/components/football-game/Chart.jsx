import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Chart = ({ gameData }) => {
  const techniquesCount = {};

  try {
    gameData.forEach((player) => {
      player.techniques.forEach((tech) => {
        techniquesCount[tech.name] = (techniquesCount[tech.name] || 0) + 1;
      });
    });
  } catch (error) {
    console.log('Lỗi xử lý gameData:', error);
  }

  const data = {
    labels: Object.keys(techniquesCount),
    datasets: [
      {
        label: 'Số lần sử dụng kỹ thuật',
        data: Object.values(techniquesCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <h2>Thống kê kỹ thuật</h2>
      <Bar data={data} />
    </div>
  );
};


