import React, { Component } from 'react';
import AddForm from './addForm';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <>
                <div className="habits">
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
                </div>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;