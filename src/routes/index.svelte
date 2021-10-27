<main class="max-w-screen-lg mx-auto h-auto mt-16 px-4 xl:px-0">
	<div class="row">
		<h1
			class="col font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-green-300"
		>
			Welcome to TailKit
		</h1>
	</div>
	<div class="row">
		<div class="col card">
			<p>Support for <a href="https://tailwindcss.com/">Tailwind CSS</a> out of the box.</p>
		</div>
        <div class="col card">
			<p>Utilises <a href="https://kit.svelte.dev">@sveltejs/adapter-node</a> to adapt backend to any nodejs capable server</p>
		</div>
		<div class="col card">
			<p>Utilises <a href="https://kit.svelte.dev">@sveltejs/adapter-node</a> to adapt backend to any nodejs capable server</p>
		</div>
		<div class="col card">
			<p>Utilises <a href="https://kit.svelte.dev">@sveltejs/adapter-node</a> to adapt backend to any nodejs capable server</p>
		</div>
	</div>
</main>

<style lang="postcss">
	.row {
		@apply flex justify-between content-center items-baseline mt-4 -mx-2;
	}

    .col {
        @apply w-full mx-2 p-3
    }

	.card {
		@apply bg-white w-full filter drop-shadow-xl rounded-md mx-2;
	}
</style>
