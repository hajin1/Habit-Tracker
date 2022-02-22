import React, { Component } from 'react';
import AddForm from '../form/addForm';
import Habit from '../habit/habit';

class Habits extends Component {
    render() {
        return (
            <div className="habits">
                <AddForm onAdd={this.props.onAdd} />
                <ul>
                    {
                        this.props.habits.map(habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}>
                            </Habit>
                        )
                    }
                </ul>
                <button title='reset' className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;