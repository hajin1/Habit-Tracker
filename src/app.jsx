import './App.css';
import Habits from './components/habits';
import NavBar from './components/navBar';
import React, { Component } from 'react';
import AddForm from './components/addForm';
class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Swimming', count: 0 },
      { id: 3, name: 'Climbing', count: 0 },
    ]
  }
  nextId = 4;

  handleIncrement = (habit) => {
    const habits = this.state.habits;
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits;
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = (count < 0) ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits;
    this.setState({ habits: habits.filter((item) => item.id !== habit.id) });
  };

  handleAdd = (name) => {
    const habits = this.state.habits;
    habits.push({ id: this.nextId++, name: name, count: 0 });
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <AddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          updateState={this.updateState}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
