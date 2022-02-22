import HabitPresenter from "../habit_presenter";

describe('HabitPresenter', () => {
    let presenter;
    const habits = [
        { id: 1, name: 'Reading', count: 1 },
        { id: 2, name: 'Swimming', count: 0 },
        { id: 3, name: 'Climbing', count: 3 },
    ];
    let update;

    beforeEach(() => {
        presenter = new HabitPresenter(habits, 4);
        update = jest.fn();
    });

    it('inits with habits', () => {
        expect(presenter.getHabits().length).toBe(3);
        expect(presenter.getHabits()).toEqual(habits);
    });

    it('increments habit count and call update callback', () => {
        presenter.increment(habits[0], update);
        expect(presenter.getHabits()[0].count).toBe(2);
        checkUpdateIsCalled();
    });

    it('decrements habit count and call update callback', () => {
        presenter.decrement(habits[0], update);
        expect(presenter.getHabits()[0].count).toBe(0);
        checkUpdateIsCalled();
    });

    it('does not set the count value below 0 when decrements', () => {
        presenter.decrement(habits[0], update);
        presenter.decrement(habits[0], update);
        expect(presenter.getHabits()[0].count).toBe(0);
    });

    it('deletes habits from the list', () => {
        presenter.delete(habits[0], update);
        expect(presenter.getHabits().length).toBe(2);
        expect(presenter.getHabits()[0]).toEqual(habits[1]);
        checkUpdateIsCalled();
    });

    it('adds new habit to the lsit', () => {
        presenter.add('Eating', update);
        expect(presenter.getHabits().length).toBe(4);
        expect(presenter.getHabits()[3].name).toBe('Eating');
        expect(presenter.getHabits()[3].count).toBe(0);
    });

    it('throws an errorr when the max habits limit is exceeded', () => {
        presenter.add('Eating', update);
        expect(() => { presenter.add('Sleeping', update) }).toThrow('습관의 개수는 4개 이상이 될 수 없습니다.');
    });

    describe('reset', () => {
        it('resets all habit counts to 0', () => {
            presenter.reset(update);
            expect(presenter.getHabits()[0].count).toBe(0);
            expect(presenter.getHabits()[1].count).toBe(0);
            expect(presenter.getHabits()[2].count).toBe(0);
        });

        it('does not create new object when count is 0', () => {
            const habits = presenter.getHabits();
            presenter.reset(update);
            const updatedHabits = presenter.getHabits();
            // toBe는 오브젝트의 참조값을 검사하므로 레퍼런스가 같은 객체인지 검사
            expect(updatedHabits[1]).toBe(habits[1]);
        });
    });

    // 테스트할때도 중복되는 코드는 함수로 빼서 처리할 수 있다.
    // update가 호출되었는지 체크하는 함수
    function checkUpdateIsCalled() {
        expect(update).toHaveBeenCalledTimes(1);
        // update를 호출할 때 증가한 배열을 인자로 전달했는지 체크
        expect(update).toHaveBeenCalledWith(presenter.getHabits());
    }
});