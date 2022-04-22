<svelte:options tag="profile-details"></svelte:options>
<script lang="ts">
	import {createEventDispatcher} from "svelte";

	export let name: string;

	let count = 0;
	function increment() {
		count+=1;
	}

	const dispatchError = createEventDispatcher();

	function dispatchErrorFunc() {
		console.log("dispatching")
		//normal dispatching doesn't work for custom elements
		//see https://github.com/sveltejs/svelte/issues/3119
		/*dispatchError('myError', {
			test: 'hello!'
		});
		*/

		const event = new CustomEvent('myError', {
			detail: 'Hello parent!',
			bubbles: true,
			cancelable: true,
			composed: true // makes the event jump shadow DOM boundary
		});

		this.dispatchEvent(event);
	}

</script>

<main>
	<h1>Hello {name}!</h1>
	count is: {count}
	<button on:click={increment}>Increment</button>
	<button on:click={dispatchErrorFunc}>Alert</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>