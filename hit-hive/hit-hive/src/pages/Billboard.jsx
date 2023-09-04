import React, { useState, useEffect } from 'react';

import { useGetHot100Query } from '../redux/services/billboardCore';

const Billboard = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const { data } = useGetHot100Query(selectedDate);

  useEffect(() => {
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-between">
        <div>
          <h2 className="font-bold text-3xl text-white text-left mt-4 mb-8">
            {selectedDate ? `${selectedDate} Billboard Top 10 Hits` : 'Today Billboard Top Hit'}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap gap-5 items-center">
          <h3 className="font-bold text-xl text-white text-left mb-2">Select a date:</h3>
          <input
            type="date"
            value={selectedDate}
            className="bg-white text-gray-500 w-[130px] h-[50px] p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 mb-5 lg:mb-0"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="">
      {data && (
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.slice(0, 10).map((item, index) => (
            <div key={index} className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
              <p className="font-semibold text-lg text-cyan-400 truncate text-center mt-[14px]">Rank: {item.rank}</p>
              <p className="font-semibold text-sm text-white truncate mb-[5px]">Song Name: {item.song_name}</p>
              <p className="font-semibold text-sm text-white truncate mb-[5px]">Artist Name: {item.artist_name}</p>
              <p className="font-semibold text-sm text-white truncate mb-[5px]">Peak Position: {item.peak_pos}</p>
              <p className="font-semibold text-sm text-white truncate mb-[5px]">Last Week: {item.last_week}</p>
              <p className="font-semibold text-sm text-white truncate">Weeks on Chart: {item.wks_on_chart}</p>
              <img src={item.image} alt={`${item.artist_name} Picture`} className="w-full h-[200px] rounded-lg mt-[14px]"/>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Billboard;
