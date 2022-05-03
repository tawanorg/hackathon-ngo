import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { withPageAdmin } from '../../components/hoc';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Revenue',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    
    {
      label: 'Revenue',
      data: [1000, 2000, 4000, 3500, 5000, 5900, 7000],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function App() {
  return <Bar options={options} data={data} />;
}

export default withPageAdmin(App, {
  page: {
    title: 'Revenue Insight',
    subtitle: 'Revenue generate by e-waste in 2021'
  }
})
