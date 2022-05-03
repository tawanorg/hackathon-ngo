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
  return (
    <div>
       
      <div className="flex flex-row items-center">
        <section className="mr-4">
          <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <circle className="circle-chart__circle" stroke="#00acc1" stroke-width="2" stroke-dasharray="30,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <g className="circle-chart__info">
              <text className="circle-chart__percent" x="16.91549431" y="16.5" alignment-baseline="central" text-anchor="middle" font-size="4">16 tonnes</text>
              {/* <text className="circle-chart__subline" x="16.91549431" y="20.5" alignment-baseline="central" text-anchor="middle" font-size="2">Yay 30% progress!</text> */}
            </g>
          </svg>
        </section>
        <div>
          <h1>Carbon footprint last month (July)</h1>
          <div className="flex flex-row items-center">
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="-15 -15 30 30">
              <path fill="green" d="M -8,-5 h 16 l -8,14 z"/>
              </svg>
            </div>
            <h1 className="text-4xl">16 tonnes</h1>
          </div>
        </div>
      </div>
      <Bar options={options} data={data} />;
    </div>
  )
}

export default withPageAdmin(App, {
  page: {
    title: 'Revenue Insight',
    subtitle: 'Revenue generate by e-waste in 2021'
  }
})
