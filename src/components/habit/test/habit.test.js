import Habit from "../habit";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Habit component', () => {
    const habit = { name: 'Habit', count: 5 };
    let HabitComponent;
    let onIncrement;
    let onDecrement;
    let onDelete;
    let onReset;

    beforeEach(() => {
        onIncrement = jest.fn();
        onDecrement = jest.fn();
        onDelete = jest.fn();
        onReset = jest.fn();
        HabitComponent = (
            <Habit habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} onReset={onReset} />
        );
    });

    it('renders', () => {
        const component = renderer.create(HabitComponent);
        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('Button Click', () => {
        beforeEach(() => {
            render(HabitComponent);
        });

        it('calls onIncrement when clicking "increment" button', () => {
            const button = screen.getByTitle('increase');
            userEvent.click(button);
            expect(onIncrement).toHaveBeenCalledWith(habit);
        });

        it('calls onDecrement when clicking "decrement" button', () => {
            const button = screen.getByTitle('decrease');
            userEvent.click(button);
            expect(onDecrement).toHaveBeenCalledWith(habit);
        });

        it('calls onDelete when clicking "delete" button', () => {
            const button = screen.getByTitle('delete');
            userEvent.click(button);
            expect(onDelete).toHaveBeenCalledWith(habit);
        });
    });

});