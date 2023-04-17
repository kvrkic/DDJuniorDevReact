import React, { useState, useEffect } from "react";
import Brojac from "./Brojac";
import Datum from "./Datum";
import DrugaEkipa from "./DrugaEkipa";
import PrvaEkipa from "./PrvaEkipa";
import Play from '../assets/play-icon.svg'
import Pause from '../assets/pause-icon.svg'

const Scoreboard = () => {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [time, setTime] = useState(0);
  const [goals, setGoals] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [speed, setSpeed] = useState(1);

  const handleLeftScore = () => {
    let minutes = Math.floor(time / 60);
    const newGoals = [...goals, { team: "Hajduk", result: `${leftScore + 1}:${rightScore}`, minute: minutes + 1, player: `${inputValue}` }];
    setGoals(newGoals);
    setLeftScore(leftScore + 1);
  };

  const handleRightScore = () => {
    let minutes = Math.floor(time / 60);
    const newGoals = [...goals, { team: "Dinamo", result: `${leftScore}:${rightScore + 1}`, minute: minutes + 1, player: `${inputValue}` }];
    setGoals(newGoals);
    setRightScore(rightScore + 1);
  };

  const handleReset = () => {
    setLeftScore(0);
    setRightScore(0);
    setTime(0);
    setGoals([]);
    clearInterval(intervalId);
    setIntervalId(null);
    setIsTimerOn(false);
    setInputValue("");
    setSpeed(1);
  };

  const handleStart = () => {
    clearInterval(intervalId);
    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000 / speed);
    setIntervalId(id);
    setIsTimerOn(true);
  };
  

  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsTimerOn(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const slowDown = () => {
    if(speed > 1){
      setSpeed((testSpeed) => testSpeed / 10);
      handlePause();
    }
  };

  const speedUp = () => {
    if(speed < 11){
      setSpeed(prevSpeed => prevSpeed * 10);
      handlePause();
    }
  };

  return (
    <div className="scoreboard-container">
      <Datum />
      <Brojac time={time}/>
      <div className="container">
        <PrvaEkipa />
        <div className="score-container">
          <div className="score">{leftScore}:{rightScore}</div>
        </div>
        <DrugaEkipa />
      </div>
      <div className="buttons-container">
        <button onClick={slowDown}>{`<<`}</button>
        <button onClick={handleLeftScore}>+</button>
        {isTimerOn ? <button id="pause" onClick={handlePause}><img src={Pause} alt="Pause"/></button> : <button id="play" onClick={handleStart}><img src={Play} alt="Play"/></button>}
        <button onClick={handleRightScore}>+</button>
        <button onClick={speedUp}>{`>>`}</button>
      </div>
      <input className="input" type="text" value={inputValue} onChange={handleInputChange} />
      <div className="goals-container">
        {goals.map((goal, index) => (
          <div key={index} className="goal">
            {goal.result} - {goal.minute}. min {goal.player} 
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>

    </div>
  );
}

export default Scoreboard;
