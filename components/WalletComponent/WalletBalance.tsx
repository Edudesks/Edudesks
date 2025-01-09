import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { DateTime } from 'luxon';
import { LuDot } from "react-icons/lu";
export default function WalletBalanceComponent() {
  const [showBalance, setShowBalance] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(1000000);
  const [localDate, setLocalDate] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [timezone, setTimezone] = useState('Africa/Lagos'); // Default to 'Africa/Lagos'

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  useEffect(() => {
    // Try to get the user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const guessedTimezone = 'Africa/Lagos'; 
          setTimezone(guessedTimezone);

          const localDateTime = DateTime.local().setZone(guessedTimezone);
          const date = localDateTime.toLocaleString(DateTime.DATE_FULL);
          const time = localDateTime.toLocaleString(DateTime.TIME_SIMPLE);

          setLocalDate(date);
          setLocalTime(time);
        },
        (error) => {
          
          console.log('Geolocation denied or failed, using default timezone.');
          const defaultTimezone = 'Africa/Lagos'; 
          setTimezone(defaultTimezone);

          const localDateTime = DateTime.local().setZone(defaultTimezone);
          const date = localDateTime.toLocaleString(DateTime.DATE_FULL);
          const time = localDateTime.toLocaleString(DateTime.TIME_SIMPLE);

          setLocalDate(date);
          setLocalTime(time);
        }
      );
    } else {
     
      console.log('Geolocation not supported, using default timezone.');
      const defaultTimezone = 'Africa/Lagos'; // Default fallback timezone
      setTimezone(defaultTimezone);

      const localDateTime = DateTime.local().setZone(defaultTimezone);
      const date = localDateTime.toLocaleString(DateTime.DATE_FULL);
      const time = localDateTime.toLocaleString(DateTime.TIME_SIMPLE);

      setLocalDate(date);
      setLocalTime(time);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 w-[521px]">
      <div className="flex justify-between items-start bg-[white] border border-[var(--border)] w-[521px] px-[15px] py-[25px] rounded-[10px]">
        {/* Balance Section */}
      <div className="flex flex-col gap-2">
        <h4 className="text-[14px] font-[500]">Current Account Balance</h4>
        {showBalance ? <p className="text-[42px] font-[700]">	
          &#8358;{currentBalance.toLocaleString()}</p> : <p className="text-[42px] font-[700]">*******</p>}
        <div className="flex items-center gap-1 text-[#636363]">
        <p>{localDate}</p>
        <LuDot/>
        <p>{localTime}</p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div className="flex items-center gap-2">
            <button className="w-[27px] h-[27px] flex items-center justify-center bg-[#7bf3c1] text-[#1bb373] text-[14px] p-[8px] rounded-[5px]"><FaArrowUpLong /></button>
            <p className="text-[var(--success)] text-[16px] font-[700] tracking-wide">+ N20,000</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-[27px] h-[27px] flex items-center justify-center bg-[#f58686] text-[#d33434] text-[14px] p-[8px] rounded-[5px]"><FaArrowDownLong /></button>
            <p className="text-[var(--danger)] text-[16px] font-[700] tracking-wide">- N10,000</p>
          </div>
        </div>
      </div>

      {/* Balance Toggle Section */}
      <div className="balance-toggle-section">
        <button onClick={handleShowBalance} >
          {showBalance ? <ViewOffSlashIcon size={24} /> : <ViewIcon size={24} />}
        </button>
      </div>

      </div>
      {/* Button Section */}
      <div className="flex items-center gap-2 mt-4">
        <button className="flex items-center bg-[var(--secondary)] text-[white] justify-center w-full h-[43px] p-[15px] gap-4 text-[17px] rounded-[5px]">
          <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
          Deposit Fund
        </button>
        <button className="flex items-center w-full h-[43px] p-[15px] gap-4 text-[17px] rounded-[5px] bg-[var(--secondary)] text-[white] justify-center">
          <Image src={"/icons/money_receive.svg"} alt="money receive" width={24} height={24} />
          Withdraw
        </button>
      </div>
    </div>
  );
}
