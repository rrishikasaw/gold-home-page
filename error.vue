<script setup>
let error = useError();
</script>

<template>
	<Header />
	<main class="text-red">
		<v-container>
			<h1>Error Page</h1>

			<p class="fz-13">
				<b>{{ error.statusCode }}:</b> {{ error.statusMessage }}
			</p>

			<p><a href="/" class="text-green-darken-3">Goto Home</a></p>
		</v-container>
	</main>
	<Footer />
</template>

<style scoped>
main {
	min-height: calc(100dvh - 70px - 70px);
}
</style>
