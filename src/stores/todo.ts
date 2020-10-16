import { writable } from 'svelte/store';

const todoActions = () => {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		addTodo: (text: string) =>
			update(todos => {
				const maxId = Math.max(0, ...todos.map(todo => todo.id)) + 1;
				return [...todos, { id: maxId, text, done: false }];
			}),
		removeTodo: (id: number) =>
			update(todos => todos.filter(todo => todo.id !== id)),
		changeTodo: (id: number) =>
			update(todos =>
				todos.map(todo =>
					todo.id === id ? { ...todo, done: !todo.done } : todo
				)
			),
		allDoneTodos: () =>
			update(todos => todos.map(todo => ({ ...todo, done: true }))),
		clearDoneTodos: () => update(todos => todos.filter(todo => !todo.done)),
		reset: () => set([]),
	};
};

export const todos = todoActions();
