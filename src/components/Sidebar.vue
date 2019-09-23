<template>
	<div class="sidebar">
		<div v-if="notes.length">
			<note v-for="note in notes" :note="note"></note>
		</div>
		<div class="sidebar__content" v-else>
			Start a new note
		</div>
		<div class="sidebar__content">
			<a @click.prevent="clearCurrentNote">Start a new note</a>
		</div>
	</div>
</template>


<script>
	import Note from './Note'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		components: {
			Note
		},

		computed: {
			...mapGetters ([
				'notes'
			])
		},

		methods: {
			...mapActions([
				'clearCurrentNote'
			])
		}
	}
</script>

<style scoped lang="scss">
	.sidebar {
		background-color: #f9f9f9;
		flex: 1;
		height: 100%;
		min-width: 28%; 
		border-right: 2px solid #eee;
		overflow-y: scroll;

		&__content {
			padding: 30px;

			a{
				text-decoration: none;
				color: inherit;
			}
		}
	}
</style>