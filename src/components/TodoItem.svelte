<script lang="ts">
	import { fade } from 'svelte/transition';
	import { todos } from '../stores/todo';
	import type { TodoType } from '../types/todo.type';
	export let todo: TodoType;
	$: id = todo.id;
	$: text = todo.text;
	$: done = todo.done;

	const handleRemove = (id: number) => todos.removeTodo(id);
	const handledChange = (id: number) => todos.changeTodo(id);
</script>

<style lang="scss">
	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0 0;
		padding: 5px 10px;
		border-radius: 5px;
		transition: all 0.3s;
		&:first-child {
			margin: 0;
		}
		&:hover {
			background: $gray_900;
			color: $white;
		}
	}
	.todo-label {
		display: inline-flex;
		align-items: center;
		.todo-text {
			margin: 0 0 0 10px;
			line-height: 25px;
		}
		&.done {
			.todo-text {
				font-weight: 700;
				text-decoration: line-through;
				color: $gray_300;
			}
		}
	}

	.remove-todo {
		display: inline-block;
	}
</style>

<li class="todo-item" transition:fade={{ delay: 100, duration: 200 }}>
	<label class="todo-label" class:done>
		<input type="checkbox" checked={done} on:change={() => handledChange(id)} />
		<p class="todo-text">{text}</p>
	</label>
	<button
		type="button"
		class="remove-todo"
		on:click={() => handleRemove(id)}>X</button>
</li>
