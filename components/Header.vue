<!-- <script setup lang="ts">
let drawer = ref(false)
let profile = ref<User | undefined>()
let route = useRoute()

function logoutUser() {
	helpers.logout()
	navigateTo('/login')
}

function toggleDrawer() {
	drawer.value = !drawer.value
}

function goto(path: string) {
	navigateTo(path)
	drawer.value = false
}
</script> -->

<template>
	<v-layout>
		<v-main style="height: 70px">
			<header class="d-flex justify-between align-center bg-black px-4">
				<NuxtLink href="/" class=" f fz-12 d-flex align-center home-link">
					<img src="~/assets/image/logo/logo.png" alt="Site Logo" class="logo" />
					<span class="ms-3 text-white">GoldInvestments</span>
				</NuxtLink>
				<div class="menu h-100 d-flex align-center">
					<div class="align-center d-none  d-sm-flex">
						<NuxtLink href="/users" class="text-white">Home</NuxtLink>
						<NuxtLink href="/feedbacks" class="text-white">Corporate</NuxtLink>
						<NuxtLink href="/login" class="text-white">Opportunity</NuxtLink>
						<NuxtLink href="/login" class="text-white">Projects</NuxtLink>
						<NuxtLink href="/login" class="text-white">Contact</NuxtLink>
					</div>
			
				</div>
			 <a
          href="/"
          class="flex button d-inline-block td-none text-white align-center px-3 py-1"
        >
          <span class="mb-0">Sign Up</span>
          <Icon
            name="flowbite:arrow-right-outline"
            class="fz-14 text-white"
          ></Icon>
        </a>
			</header>
		</v-main>
	
	</v-layout>
</template>

<style scoped>
header {
	height: 70px;
}

.logo {
	width: auto;
	height: 42px;
}
.button{
	border: 1px solid var(--theme);

	/* background-color: aquamarine; */
}
.menu a {
	color: var(--theme);
	text-decoration: none;
	padding: 3px 15px;
	margin-inline: 2px;
	font-weight: 500;
	font-size: 1.1rem;
	text-align: center;
	display: flex;
	align-items: center;
	transition: all 300ms;
}

.menu a:hover {
	/* background-color: var(--theme); */
	color: var(--theme) !important;
	border-bottom: 3px solid var(--theme);
}

a.active {
	background-color: var(--theme);
	/* color: white; */
	border: 5px solid var(--theme);
}

.home-link {
	text-decoration: none !important;
}
</style>
