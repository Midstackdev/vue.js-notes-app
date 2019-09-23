export const note = state => {
	return state.note
}

export const notes = state => {
	return state.notes.sort((a, b) => {
		return (a['lastSaved'] > b['lastSaved']) ? 1 : (a['lastSaved'] < b['lastSaved']) ? -1 : 0
	})
}