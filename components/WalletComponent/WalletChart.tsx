import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

interface MonthData {
  [key: string]: {
    deposits: number[];
    withdrawals: number[];
  };
}

const monthData: MonthData = {
    January: {
      deposits: [100000, 200000, 300000, 400000, 500000],
      withdrawals: [90000, 180000, 270000, 360000, 450000],
    },
    February: {
      deposits: [120000, 220000, 320000, 420000, 520000],
      withdrawals: [110000, 210000, 310000, 410000, 510000],
    },
    March: {
      deposits: [130000, 230000, 330000, 430000, 530000],
      withdrawals: [120000, 220000, 320000, 420000, 520000],
    },
    April: {
      deposits: [140000, 240000, 340000, 440000, 540000],
      withdrawals: [130000, 230000, 330000, 430000, 530000],
    },
    May: {
      deposits: [150000, 250000, 350000, 450000, 550000],
      withdrawals: [140000, 240000, 340000, 440000, 540000],
    },
    June: {
      deposits: [160000, 260000, 360000, 460000, 560000],
      withdrawals: [150000, 250000, 350000, 450000, 550000],
    },
    July: {
      deposits: [170000, 270000, 370000, 470000, 570000],
      withdrawals: [160000, 260000, 360000, 460000, 560000],
    },
    August: {
      deposits: [180000, 280000, 380000, 480000, 580000],
      withdrawals: [170000, 270000, 370000, 470000, 570000],
    },
    September: {
      deposits: [190000, 290000, 390000, 490000, 590000],
      withdrawals: [180000, 280000, 380000, 480000, 580000],
    },
    October: {
      deposits: [200000, 300000, 400000, 500000, 600000],
      withdrawals: [190000, 290000, 390000, 490000, 590000],
    },
    November: {
      deposits: [210000, 310000, 410000, 510000, 610000],
      withdrawals: [200000, 300000, 400000, 500000, 600000],
    },
    December: {
      deposits: [220000, 320000, 420000, 520000, 620000],
      withdrawals: [210000, 310000, 410000, 510000, 610000],
    },
  };
  

const WalletChartComponent = () => {
  const [selectedMonth, setSelectedMonth] = useState<keyof MonthData>('January');

  const data = {
    labels: ['Jan 2', 'Jan 6', 'Jan 9', 'Jan 18', 'Jan 20'],
    datasets: [
      {
        label: 'Deposit',
        data: monthData[selectedMonth].deposits,
        backgroundColor: '#4b8bbe',
      },
      {
        label: 'Withdraw',
        data: monthData[selectedMonth].withdrawals,
        backgroundColor: '#FF565A',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Wallet Activity',
        font: {
          size: 18,
        },
        align: 'start',
        // position: 'right',
        padding: {
          bottom: 10,
        },
      },
      legend: {
        // position: 'right',
        align: 'start',
        labels: {
          boxWidth: 20,
        },
      },
    },
    layout: {
      padding: {
        bottom: 0, // Add some space between the chart and the legend/title
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `N${value / 1000}K`,
        },
      },
    },
  };
  

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedMonth(event.target.value as keyof MonthData);
  };

  return (
    <>
      <div className='bg-[white] border border-[var(--border)] w-[521px] px-[15px] py-[45px] rounded-[10px] relative'>
      <FormControl className='w-[121px] h-[22px] absolute right-3 mb-3'>
        <Select
          labelId="month-select-label"
          value={selectedMonth}
          onChange={handleChange}
        >
          {Object.keys(monthData).map((month) => (
            <MenuItem key={month} value={month}>
              {month.substring(0, 3)} {/* Show abbreviation */}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Bar data={data} options={options} className='flex flex-col gap-4 ' />
      </div>
    </>
  );
};

export default WalletChartComponent;
