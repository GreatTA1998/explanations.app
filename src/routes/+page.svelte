<TopNavbar>
	<div slot="tab-section" class="my-tab-container">
		<div on:click={() => activeTabName = 'Learn'} 
			class="tab-full-item"
			class:active-underline-indicator={activeTabName === 'Learn'}
		>
			
			<span class="material-symbols-outlined tab-icon" class:active-tab-icon={activeTabName === 'Learn'}>
				smart_display
			</span>
			<div class="tab-name" class:active-bold={activeTabName === 'Learn'}>
				Learn
			</div>
		</div>

		<div on:click={() => activeTabName = 'Teach'} 
			class="tab-full-item"
			class:active-underline-indicator={activeTabName === 'Teach'}
		>
			<span class="material-symbols-outlined tab-icon" class:active-tab-icon={activeTabName === 'Teach'}>
				stylus_note
			</span>
			<div class="tab-name" class:active-bold={activeTabName === 'Teach'}>
				Teach
			</div>
		</div>
	</div>

	<div class="webflow-container">
		{#if activeTabName === 'Learn'}
			<HomePageForLearner/>
		{:else}
			<HomePageForTeacher/>
		{/if}
	</div>
</TopNavbar>

<script>	
	import { goto } from '$app/navigation'
	import { onMount, tick, onDestroy } from 'svelte'
	import { mixpanelLibrary } from '/src/mixpanel.js'
	import TopNavbar from '$lib/TopNavbar.svelte'
	import HomePageForLearner from '$lib/HomePageForLearner.svelte'
	import HomePageForTeacher from '$lib/HomePageForTeacher.svelte'

	let activeTabName = 'Learn'

	onMount(() => {
		mixpanelLibrary.track('Home page visited')
	})
</script>

<style lang="scss">
	strong {
		color: rgb(30, 30, 30)	
	}

	.my-tab-container {
		margin-left: 24px; 
		margin-right: auto; 
		display: flex; 
		align-items: center; 
		justify-content: space-evenly; 
		color: black; 
		width: 160px; 
		box-sizing: border-box;
	}

	.tab-full-item {
		cursor: pointer; 
		text-align: center; 
		height: var(--navbar-height); 
		box-sizing: border-box; 
		padding: 6px;
	}

	.tab-name {
		font-size: 14px; 
		margin-top: -2px; 
		color: rgb(90, 90, 90);
	}

	.tab-icon {
		font-size: 26px; 
		color: rgb(90, 90, 90);
	}

	.active-bold {
		font-weight: 500;
		color: rgb(0, 0, 0);
	}

	.active-tab-icon {
		color: rgb(0, 0, 0);
	}
</style>
