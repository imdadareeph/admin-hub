import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '../../contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title?: string;
  data: number[];
  labels: string[];
  colors?: string[];
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  labels,
  colors = ['rgba(59, 130, 246, 1)', 'rgba(20, 184, 166, 1)', 'rgba(249, 115, 22, 1)'],
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const backgroundColors = data.map((_, index) => {
    const colorIndex = index % colors.length;
    return isDark 
      ? colors[colorIndex].replace('1)', '0.7)') 
      : colors[colorIndex].replace('1)', '0.7)');
  });

  const borderColors = data.map((_, index) => {
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: title || 'Dataset',
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: 4,
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;