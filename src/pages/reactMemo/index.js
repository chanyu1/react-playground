import { useState, useMemo, useEffect } from 'react';

export const ReactMemo = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? 'Korea' : 'Japen',
  // };
  const location = useMemo(() => {
    return {
      country: isKorea ? 'Korea' : 'Japen',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect');
  }, [location]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <p>Location: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Change location</button>
    </div>
  );
};

// const hardCalc = (number) => {
//   console.log('hardCalc');
//   for (let i = 0; i < 999999999; i++) {
//     //
//   }
//   return number + 10000;
// };

// const easyCalc = (number) => {
//   console.log('easyCalc');
//   return number + 1;
// };

// export const ReactMemo = () => {
//   const [hardNumber, setHardNumber] = useState(1);
//   const [easyNumber, setEasyNumber] = useState(1);

//   // const hardSum = hardCalc(hardNumber);
//   const hardSum = useMemo(() => {
//     hardCalc(hardNumber);
//   }, [hardNumber]);

//   const easySum = easyCalc(easyNumber);

//   return (
//     <div>
//       <h3>Hard calc</h3>
//       <input
//         type="number"
//         value={hardNumber}
//         onChange={(e) => setHardNumber(parseInt(e.target.value))}
//       />
//       <span> + 10000 = {hardSum}</span>

//       <h3>Easy calc</h3>
//       <input
//         type="number"
//         value={easyNumber}
//         onChange={(e) => setEasyNumber(parseInt(e.target.value))}
//       />
//       <span> + 1 = {easySum}</span>
//     </div>
//   );
// };
