<script lang="ts">
	import { todos } from '../stores/todo';
	$: doneTodos = $todos.filter(todo => todo.done);

	const handledAllCheck = () => todos.allDoneTodos();
	const handledReset = () => todos.reset();
	const handledClearDone = () => todos.clearDoneTodos();
</script>

<style lang="scss">
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 200px 0 0;
		button {
			background: $gray_900;
			color: #fff;
			padding: 10px;
			border-radius: 5px;
			line-height: 20px;
			&.reset-button {
				background: $red_500;
			}
		}
	}
</style>

<footer>
	<button type="button" on:click={handledAllCheck}>all check done</button>
	<button type="button" on:click={handledClearDone}>clear all done({doneTodos.length})</button>
	<button
		type="button"
		class="reset-button"
		on:click={handledReset}>reset</button>
</footer>
