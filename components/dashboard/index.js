import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const columns = [
  { key: "LicensePlate", label: "License Plate" },
  { key: "Make", label: "Make" },
  { key: "VIN", label: "VIN" },
  { key: "Model", label: "Model" },
  { key: "Type", label: "Type" },
  { key: "Date", label: "Date" },
  { key: "MilesDriven", label: "Miles Driven" },
];

const Dashboard = () => {
  const [totalMilesDriven, setTotalMilesDriven] = useState(0);
  const [frequency, setFrequency] = useState('Daily');
  const [timeFrame, setTimeFrame] = useState({ startDate: null, endDate: null });
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
 
  useEffect(() => {
    const today = new Date();
    setTimeFrame(prevState => ({ ...prevState, endDate: today }));
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const startDateISOString = timeFrame?.startDate?.toISOString();
        const endDateISOString = timeFrame?.endDate?.toISOString();
    
        const response = await fetch(`http://localhost:5000/api/data?frequency=${frequency}&startDate=${startDateISOString}&endDate=${endDateISOString}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const responseData = await response.json();
        if (frequency === 'Daily') {
            setDailyData(responseData.groupedData.All);
            setTotalMilesDriven(responseData.totals.daily);
          } else if (frequency === 'Weekly') {
            setWeeklyData(responseData.groupedData);
            setTotalMilesDriven(responseData.totals.weekly);
          } else if (frequency === 'Monthly') {
            setMonthlyData(responseData.groupedData);
            setTotalMilesDriven(responseData.totals.monthly);
          } else if (frequency === 'Yearly') {
            setYearlyData(responseData.groupedData);
            setTotalMilesDriven(responseData.totals.yearly);
          }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [frequency, timeFrame]);

  const calculateTotalMiles = (items) => {
    return items.reduce((total, item) => total + item.MilesDriven, 0);
  };
  
  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setTimeFrame({ ...timeFrame, startDate: new Date(e.target.value) });
  };

  const handleEndDateChange = (e) => {
    setTimeFrame({ ...timeFrame, endDate: new Date(e.target.value) });
  };

  return (
    <div className="mx-auto p-4 flex flex-col text-black">
      <h1 className="text-lg font-bold mb-6 uppercase tracking-widest text-center">Vehicle Reports Dashboard</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
        <div className="flex flex-col lg:flex-row items-center lg:mr-4 mb-2 lg:mb-0">
          <label htmlFor="frequency" className="mr-2 font-semibold lg:w-24 lg:text-right">Frequency:</label>
          <select id="frequency" value={frequency} onChange={handleFrequencyChange} className="px-2 py-1 border rounded">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:mr-4 mb-2 lg:mb-0">
          <label htmlFor="startDate" className="mr-2 font-semibold lg:w-24 lg:text-right">Start Date:</label>
          <input type="date" id="startDate" value={timeFrame.startDate ? timeFrame.startDate.toISOString().split('T')[0] : ''} onChange={handleStartDateChange} className="px-2 py-1 border rounded" />
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <label htmlFor="endDate" className="mr-2 font-semibold lg:w-24 lg:text-right">End Date:</label>
          <input type="date" id="endDate" value={timeFrame.endDate ? timeFrame.endDate.toISOString().split('T')[0] : ''} onChange={handleEndDateChange} className="px-2 py-1 border rounded" />
        </div>
      </div>
      {frequency && (
        <div className="overflow-y-auto h-[585px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {columns?.map(column => (
                  <th key={column.key} className="px-5 py-3 text-md tracking-widest uppercase">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {frequency === 'Daily' && dailyData?.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white shadow-md hover:shadow-lg"
                >
                  {columns?.map(column => (
                    <td key={column.key} className="border px-6 py-4 text-sm">{item[column.key]}</td>
                  ))}
                </motion.tr>
              ))}
              {frequency !== 'Daily' && Object.entries(frequency === 'Weekly' ? weeklyData : frequency === 'Monthly' ? monthlyData : yearlyData)?.map(([period, items]) => (
                <React.Fragment key={period}>
                  <tr className="bg-white text-black font-bold text-md uppercase mt-4 mb-2">
                    <td colSpan={columns.length}>{frequency === 'Weekly' ? `Week ${period}` : frequency === 'Monthly' ? `Month ${period}` : `Year ${period}`}</td>
                  </tr>
                  {items?.map((item) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white shadow-md hover:shadow-lg"
                    >
                      {columns?.map(column => (
                        <td key={column.key} className="border px-6 py-4 text-sm">{item[column.key]}</td>
                      ))}
                    </motion.tr>
                  ))}
                  <tr>
                    <td colSpan={columns.length} className="text-right">
                      <span className="font-semibold uppercase tracking-widest">Miles Driven:</span> {calculateTotalMiles(items)}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="bg-white shadow-md mt-4 px-6 py-4 text-right">
        <span className="font-semibold uppercase tracking-widest">Total Miles Driven:</span> {totalMilesDriven}
      </div>
    </div>
  );
};

export default Dashboard;
