class HabitPresenter {
    constructor(habits) {
        this.habits = habits;
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
            return (item.id === habit.id) ? { ...habit, count: (habit.count < 1) ? 0 : habit.count - 1 } : item;
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
        this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
        update(this.habits);
    }
}

export default HabitPresenter;