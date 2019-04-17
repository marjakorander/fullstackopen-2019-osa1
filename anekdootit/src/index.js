import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const AnecdoteHeader = ({selected, points}) => {
  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      This anecdote has {points[selected]} points
    </div>
  )
}

const BestPoints = (props) => {
  const bestPoints = props.points.indexOf(Math.max(...props.points));
  if (props.points[bestPoints] === 0) {
    return (
      <div>
        <p>No points yet!</p>
      </div>
    )
  }
  return (
    <div>
      <p>Anecdote with most votes is: "{anecdotes[bestPoints]}". <br />
      It has {props.points[bestPoints]} votes.</p>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(6).fill(0));

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random() * (+6 - +0)) + +0);
  };

  const voteAnecdote = (selected) => {
    const copyPoints = [...points];
    copyPoints[selected] +=1;
    setPoints(copyPoints);
  };

  return (
    <div>
        <AnecdoteHeader points={points} selected={selected}/>
        <Button handleClick={() => changeAnecdote(anecdotes)} text="next anecdote" />
        <Button handleClick={() => voteAnecdote(selected)} text="vote" />
        <BestPoints points={points} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById("root"));
