import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ dropDate }) => {
  const [timerString, setTimerString] = useState('');

  useEffect(() => {
    console.log('Setting interval...');
  
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = dropDate - currentDate;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  
      if (distance < 0) {
        console.log('Clearing interval...');
        clearInterval(interval);
      }
    }, 1000);
  
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="text-white text-center">
      <p className="mt-[5vh] font-light">Drop Starting In</p>
      {timerString && <p className="text-5xl font-light text-white ">{`⏰ ${timerString}`}</p>}
    </div>
  );
};

export default CountdownTimer;