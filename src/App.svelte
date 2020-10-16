<script lang="ts">
	import TodoFooter from './components/TodoFooter.svelte';
	import TodoHeader from './components/TodoHeader.svelte';
	import TodoList from './components/TodoList.svelte';
</script>

<style lang="scss">
	.todo-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px 0;
		min-height: 100vh;
		.todo-inner {
			width: 500px;
			min-height: 500px;
		}
	}
</style>

<div class="todo-wrapper">
	<div class="todo-inner">
		<TodoHeader />
		<TodoList />
		<TodoFooter />
	</div>
</div>
