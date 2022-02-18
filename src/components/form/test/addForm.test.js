import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "../addForm";

describe('AddForm', () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
        onAdd = jest.fn();
        render(<AddForm onAdd={onAdd} />);
        input = screen.getByPlaceholderText('Habit');
        button = screen.getByText('Add');
    })

    it('calls onAdd whtn button is clicked and valid habit is entered', () => {
        // input에다가 원하는 습관의 이름을 타이밍 한 다음에
        // Add 라는 버튼을 클릭하면
        // onAdd가 input에 입력된 이름과 함께 호출되어야 함
        userEvent.type(input, 'New Habit');
        userEvent.click(button);

        expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('does not call onAdd when the habit is empty', () => {
        userEvent.type('input', '');
        userEvent.click(button);

        expect(onAdd).toHaveBeenCalledTimes(0);
    });

});