import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <>
                <li className="habit">
                    <span className="habit-name" data-testid="habit-name">{name}</span>
                    <span className="habit-count" data-testid="habit-count">{count}</span>
                    <button title='increase' data-testid="habit-increase" className="habit-button habit-increase" onClick={this.handleIncrement}><i className="fas fa-plus-square"></i></button>
                    <button title='decrease' data-testid="habit-decrease" className="habit-button habit-decrease" onClick={this.handleDecrement}><i className="fas fa-minus-square"></i></button>
                    <button title='delete' data-testid="habit-delete" className="habit-button habit-delete" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                </li>
            </>
        );
    }
}

export default Habit;