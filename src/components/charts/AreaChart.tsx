import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface AreaChartProps {
  title?: string;
  data: number[];
  labels: string[];
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  title,
  data,
  labels,
  color = 'rgb(59, 130, 246)',
  borderColor = 'rgb(59, 130, 246)',
  backgroundColor = 'rgba(59, 130, 246, 0.1)',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = {
    labels,
    datasets: [
      {
        label: title || 'Dataset',
        data,
        borderColor,
        backgroundColor,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: color,
        pointBorderColor: isDark ? '#1F2937' : '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? '#1F2937' : 'rgba(255, 255, 255, 0.9)',
        titleColor: isDark ? '#F3F4F6' : '#111827',
        bodyColor: isDark ? '#D1D5DB' : '#4B5563',
        borderColor: isDark ? '#374151' : '#E5E7EB',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 6,
        boxPadding: 4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
        },
      },
      y: {
        grid: {
          color: isDark ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)',
        },
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChart;