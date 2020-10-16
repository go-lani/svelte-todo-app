<script lang="ts">
	import { todos } from '../stores/todo';
	let el_ipt;
	let text;

	const handleSubmit = () => {
		if (text === undefined || text.trim() === '') return;
		todos.addTodo(text);
		text = '';
		el_ipt.focus();
	};
</script>

<style lang="scss">
	.header-title {
		font-weight: 700;
		font-size: 80px;
		color: $orange_500;
	}
	.add-todo-box {
		display: flex;
		margin: 80px 0 0;
		.add-input {
			font-size: 18px;
		}
		.submit-button {
			flex-shrink: 0;
			margin: 0 0 0 10px;
			padding: 5px 20px;
			border-radius: 5px;
			background: $gray_900;
			font-size: 18px;
			color: $white;
		}
	}
</style>

<header>
	<h1 class="header-title">Svelte TO-DO</h1>
	<div class="add-todo-box">
		<input
			type="text"
			bind:value={text}
			bind:this={el_ipt}
			class="add-input" /><button
			type="button"
			class="submit-button"
			on:click={handleSubmit}>추가</button>
	</div>
</header>
