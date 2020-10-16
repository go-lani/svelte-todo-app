<script lang="ts">
	import TodoItem from './TodoItem.svelte';
	import { todos } from '../stores/todo';
</script>

<style lang="scss">
	.todos-list {
		margin: 20px 0 0;
	}
</style>

<ul class="todos-list">
	{#each $todos as todo}
		<TodoItem {todo} />
	{/each}
</ul>
