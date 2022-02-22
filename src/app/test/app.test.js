import HabitPresenter from "../habit_presenter";
import renderer from 'react-test-renderer';
import App from "../app";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('App', () => {
    let presenter;
    beforeEach(() => {
        presenter = new HabitPresenter([
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Swimming', count: 0 },
            { id: 3, name: 'Climbing', count: 1 },
        ]);
    });

    it('renders', () => {
        const component = renderer.create(<App presenter={presenter} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('Component', () => {
        beforeEach(() => {
            render(<App presenter={presenter} />);
        });

        it('counts only active habits', () => {
            const button = screen.getAllByTitle('increase')[0];
            userEvent.click(button);
            const count = screen.getByTestId('total-count');
            expect(count.innerHTML).toBe('2');
        });

        it('adds new habit', () => {
            const newHabit = 'New Habit';
            const input = screen.getByPlaceholderText('Habit');
            const button = screen.getByText('Add1');
            userEvent.type(input, newHabit);
            userEvent.click(button);
            const addedName = screen.getAllByTestId('habit-name')[3];
            expect(addedName.innerHTML).toBe(newHabit);
            const addedCount = screen.getAllByTestId('habit-count')[3];
            expect(addedCount.innerHTML).toBe('0');
        });

        it('deletes an item', () => {
            const button = screen.getAllByTitle('delete')[0];
            userEvent.click(button);
            const item = screen.getAllByTestId('habit-name')[0];
            expect(item.innerHTML).toBe('Swimming');
        });

        it('increases the counter', () => {
            const button = screen.getAllByTitle('increase')[0];
            userEvent.click(button);
            userEvent.click(button);
            const count = screen.getAllByTestId('habit-count')[0];
            expect(count.innerHTML).toBe('2');
        });

        it('decreases the counter', () => {
            const button = screen.getAllByTitle('decrease')[2];
            userEvent.click(button);
            const count = screen.getAllByTestId('habit-count')[2];
            expect(count.innerHTML).toBe('0');
        });

        it('resets all counter', () => {
            const button = screen.getByTitle('reset');
            userEvent.click(button);
            screen.getAllByTestId('habit-count').forEach((count) => {
                expect(count.innerHTML).toBe('0');
            })
        });
    });

});
