import '../app/App.css';
import React, { useState } from 'react';
import NavBar from '../components/navBar/navBar';
import Habits from '../components/habits/habits';

const App = ({ presenter }) => {
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = (habit) => {
    presenter.increment(habit, setHabits);
  };

  const handleDecrement = (habit) => {
    presenter.decrement(habit, setHabits);
  };

  const handleDelete = (habit) => {
    presenter.delete(habit, setHabits);
  };

  const handleAdd = (name) => {
    presenter.add(name, setHabits);
  }

  const handleReset = () => {
    presenter.reset(setHabits);
  }

  return (
    <>
      <NavBar totalCount={habits.filter(item => item.count > 0).length} />
      <Habits
        habits={habits}
        updateState={setHabits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
