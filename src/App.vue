<template>

	<div class="global-wrapper h-full flex">
		<RouterView />
	</div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import * as Misc from '@/components/Misc'
import * as Button from '@/components/Button'

export default {
	data() {
		return {
		}
	},
	components: {
		...Misc,
		...Button,
	},
	methods: {
	}
}

</script>

<style lang="scss" scoped>
.global-wrapper {

}
</style>
