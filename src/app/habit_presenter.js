class HabitPresenter {
    constructor(habits, maxHabits) {
        this.habits = habits;
        this.maxHabits = maxHabits;
    }

    getHabits() {
        return this.habits;
    }

    increment(habit, update) {
        this.habits = this.habits.map((item) => {
            return (item.id === habit.id) ? { ...habit, count: habit.count + 1 } : item;
        });
        update(this.habits);
    }

    decrement(habit, update) {
        this.habits = this.habits.map((item) => {
            const count = item.count - 1;
            return (item.id === habit.id) ? { ...habit, count: (count < 0) ? 0 : count } : item;
        });
        update(this.habits);
    }

    reset(update) {
        this.habits = this.habits.map(habit => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;
        });
        update(this.habits);
    }

    delete(habit, update) {
        this.habits = this.habits.filter((item) => item.id !== habit.id);
        update(this.habits);
    }

    add(name, update) {
        if (this.habits.length === this.maxHabits) {
            throw new Error(`습관의 개수는 ${this.maxHabits}개 이상이 될 수 없습니다.`)
        }
        this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
        update(this.habits);
    }
}

export default HabitPresenter;