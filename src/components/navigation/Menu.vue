<script setup lang="ts">
	
</script>

<template>
	<div class="menu">
		<div class="container container--large">
			<div class="logo flex flex-center">
				<router-link to="/">
					<img src="@/assets/icons/icehammer-hammer.svg" alt="logo" />
				</router-link>
			</div>
			<div>
				<!-- <router-link to="/tournament">Tournaments</router-link>
				<router-link to="/article">News</router-link>
				<router-link to="/mission-pack">Mission Packs</router-link> -->
				<router-link to="/about">About us</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.menu {
		height: 120px;
		width: 100%;
		background-color: black;
		color: white;
		.container {			
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
		}

		a {
			margin: 30px;
			font-size: 1.6rem;
			color: $white;

			&:hover {
				color: $link-blue--hover;
			}
		}

		.logo {
			height: 120px;
			padding: 20px 0 5px 0;
			img {
				max-height: 80px;
			}
		}

	}
</style>