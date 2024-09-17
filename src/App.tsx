import React from 'react';
import './App.css';
import cake from './assets/cake.svg';
import candle from './assets/candle.svg';

function App() {
  const links: string[] = [
    'https://youtu.be/kkW3CgohOB0', // The harasser
    'https://youtu.be/Py7LGgHYSMw', // Darkness
    'https://youtu.be/w5ORzdd6Ozo', // Dorin
    'https://youtu.be/hfpgAhx2Bw0', // Yaara A.
    'https://youtu.be/SxMf2MTr4zM', // Eliyah
    'https://youtu.be/GGySGdmAFis', // Ilay and Linoy
    'https://youtu.be/b-swAcJRxIg', // Oren
    'https://youtu.be/wJZaoLVUOA0', // Ronny and Tal
    'https://youtu.be/AdaYQYMCgHo', // Naomi
    'https://youtu.be/f-Ls1JBnCq8', // Psycho
    'https://youtu.be/-wQ18YFSf4I', // Lo kolel sherut
    'https://youtu.be/7C-CXwIA_N4', // Rachel and Phoebe
    'https://youtu.be/A65IZkkXR4k', // Yaara
    'https://youtu.be/5MsRzgVwjcs', // Buffy
  ];
  const positions = [
    ['45%', '47%'],
    ['57%', '45%'],
    ['32%', '72%'],
    ['65%', '75%'],
    ['15%', '60%'],
    ['80%', '60%'],
    ['28%', '43%'],
    ['55%', '77%'],
    ['69%', '41%'],
    ['23%', '66%'],
    ['75%', '67%'],
    ['23%', '38%'],
    ['42%', '75%'],
    ['35%', '46%'],
  ];
  return (
    <div className="App">
      <div className="Text" id="Text1">Blow</div>
      <div className="Text" id="Text2">out</div>
      <div className="Text" id="Text3">the</div>
      <div className="Text" id="Text4">candles</div>
      <div className="CakeContainer">
        {links?.map((link, index) => {
          if (positions[index]) {
            const position = positions[index];
            return <a href={link} key={"candle_" + index} className="CandleLink" style={{left: position[0], top: position[1]}} target="_blank" rel="noreferrer">
              <img src={candle} alt="candle" className="Candle" />
              </a>;
          }
          return null;
        })}
        <img src={cake} alt="cake" className="Cake" />
      </div>
    </div>
  );
}

export default App;
