import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
  {text}
  </button>
)

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        Ei palautteita
      </div>
    )
  }
  return (
    <div>
      <p>Hyvä {props.good}</p>
      <p>Neutraali {props.neutral}</p>
      <p>Huono {props.bad}</p>
      <p>Yhteensä {props.allClicks}</p>
      <p>Keskiarvo {(props.bad*-1 + props.good*1) / props.allClicks}</p>
    </div>
  ) 
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const handleGood = () => {
    setAll(allClicks + 1);
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setAll(allClicks + 1);
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setAll(allClicks + 1);
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Anna palautetta</h1>
      <div>
        <Button handleClick={handleGood} text='Hyvä'/>
        <Button handleClick={handleNeutral} text='Neutraali'/>
        <Button handleClick={handleBad} text='Huono'/>
      </div>
      <div>
        <h2>Statistiikka</h2>
      </div>
      <div>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));