"use client"
import React, { useState, useEffect } from 'react';

interface IRealTimeProfitDisplayProps {
  startTime: number;
  initialProfit: number;
  percentageProfit: number;
  numberOfDays: number;
  symbol: string;
  pause?: {
    status: boolean;
    start: number;
    total: number;    
  }
}

const RealTimeProfitDisplay = ({ startTime, initialProfit, percentageProfit, numberOfDays, symbol, pause }: IRealTimeProfitDisplayProps) => {

  // console.log({
  //   startTime,
  //   initialProfit,
  //   percentageProfit,
  //   numberOfDays
  // })


  const [currentProfit, setCurrentProfit] = useState(0);
  const percentageProfitPerSecond = percentageProfit / (numberOfDays * 24 * 60 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
        const timeElapsedInSeconds = pause?.total ? (Date.now() - startTime - pause?.total) / 1000 : (Date.now() - startTime) / 1000;

        const newProfit = (initialProfit * (percentageProfitPerSecond / 100)) * timeElapsedInSeconds;
        
        setCurrentProfit(initialProfit + newProfit);
      }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [initialProfit, percentageProfitPerSecond, startTime, pause?.total]);

  return (
      <p>{symbol}{currentProfit.toFixed(2)}</p>
  );
};


export default RealTimeProfitDisplay;




// "use client"
// import React, { useState, useEffect } from 'react';

// interface IRealTimeProfitDisplayProps {
//   startTime: number;
//   initialProfit: number;
//   percentageProfit: number;
//   numberOfDays: number;
//   symbol: string;
// }

// const RealTimeProfitDisplay = ({ startTime, initialProfit, percentageProfit, numberOfDays, symbol }: IRealTimeProfitDisplayProps) => {

//   // console.log({
//   //   startTime,
//   //   initialProfit,
//   //   percentageProfit,
//   //   numberOfDays
//   // })
//   const [currentProfit, setCurrentProfit] = useState(0);
//   const percentageProfitPerSecond = percentageProfit / (numberOfDays * 24 * 60 * 60); 

//   useEffect(() => {
//     const interval = setInterval(() => {
//         const timeElapsedInSeconds = (Date.now() - startTime) / 1000;

//         const newProfit = (initialProfit * (percentageProfitPerSecond / 100)) * timeElapsedInSeconds;
        
//         setCurrentProfit(initialProfit + newProfit);
//       }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [initialProfit, percentageProfitPerSecond, startTime]);

//   return (
//       <p>{symbol || "$"}{currentProfit.toFixed(2)}</p>
//   );
// };


// export default RealTimeProfitDisplay;
