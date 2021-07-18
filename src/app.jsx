import './App.css';
import Habits from './components/habits';
import NavBar from './components/navBar';
import React, { Component } from 'react';
class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Swimming', count: 0 },
      { id: 3, name: 'Climbing', count: 0 },
    ]
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      return (item.id === habit.id) ? { ...habit, count: habit.count + 1 } : item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      return (item.id === habit.id) ? { ...habit, count: (habit.count < 1) ? 0 : habit.count - 1 } : item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits;
    this.setState({ habits: habits.filter((item) => item.id !== habit.id) });
  };

  handleAdd = (name) => {
    const habits = this.state.habits;
    habits.push({ id: Date.now(), name: name, count: 0 });
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          updateState={this.updateState}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
