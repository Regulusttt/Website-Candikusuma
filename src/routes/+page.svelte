<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mobile from '$lib/components/Mobile.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
	import HeroCards_KJ from '$lib/components/HeroCards_KJ.svelte'
	import Links from '$lib/components/Links.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import Card from '$lib/components/Card.svelte';
	import Profile from '$lib/components/Profile.svelte'
</script>

<div>
	<div class="">
		<div class="">
			<Hero />
		</div>

		<div class="lg:container mx-auto">
			<Carousel />
		</div>
<!-- 
		<div class="lg:container mx-auto">
			<Profile />
		</div> -->
	</div>

	<div class="container mx-auto bg-base-300">

		<div class="my-10">
			<HeroCards />
		</div>

		<div class="my-10">
			<HeroCards_KJ />
		</div>
	</div>
</div>
