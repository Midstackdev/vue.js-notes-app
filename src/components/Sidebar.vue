<template>
	<div class="sidebar">
		<note></note>
		<note></note>
		<note></note>
		<!-- <div class="sidebar__content">
			Start a new note
		</div> -->
	</div>
</template>


<script>
	import Note from './Note'

	export default {
		components: {
			Note
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