import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Habits from "../habits";

describe('Habits component', () => {
    const habits = [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Swimming', count: 0 },
        { id: 3, name: 'Climbing', count: 0 },
    ];

    let HabitsComponent;
    let onAdd;
    let onIncrement;
    let onDecrement;
    let onDelete;
    let onReset;

    beforeEach(() => {
        onIncrement = jest.fn();
        onDecrement = jest.fn();
        onDelete = jest.fn();
        onReset = jest.fn();
        onAdd = jest.fn();
        HabitsComponent = (
            <Habits habits={habits} onReset={onReset} onAdd={onAdd} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
        );
    });

    it('renders', () => {
        const component = renderer.create(HabitsComponent);
        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('Button Click', () => {
        beforeEach(() => {
            render(HabitsComponent);
        });

        it('calls onAdd when clicking the "Add" button', () => {
            const input = screen.getByPlaceholderText('Habit');
            const button = screen.getByText('Add1');
            const newHabit = 'New Habit';
            userEvent.type(input, newHabit);
            userEvent.click(button);
            expect(onAdd).toHaveBeenCalledWith(newHabit);
        });

        it('calls onIncrement when clicking the "increase" button', () => {
            const button = screen.getAllByTitle('increase')[0];
            userEvent.click(button);
            expect(onIncrement).toHaveBeenCalledWith(habits[0]);
        });

        it('calls onDecrement when clicking the "decrease" button', () => {
            const button = screen.getAllByTitle('decrease')[0];
            userEvent.click(button);
            expect(onDecrement).toHaveBeenCalledWith(habits[0]);
        });

        it('calls onDelete when clicking the "delete" button', () => {
            const button = screen.getAllByTitle('delete')[0];
            userEvent.click(button);
            expect(onDelete).toHaveBeenCalledWith(habits[0]);
        });

        it('calls onReset when clicking "reset" button', () => {
            const button = screen.getByTitle('reset');
            userEvent.click(button);
            expect(onReset).toHaveBeenCalledTimes(1);
        });

    });

});