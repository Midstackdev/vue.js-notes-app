import * as mutations from './mutation-types'

export const saveNote = ({ commit, dispatch, state }) => {
	// touch last saved timestamp
	commit(mutations.TOUCH_LAST_SAVED)

	if(state.note.id === null) {

		commit(mutations.SET_CURRENT_NOTE_ID, Date.now())

		commit(mutations.PREPEND_TO_NOTES, state.note)
	}
}


export const startSaveTimeout = ({ commit, dispatch, state }) => {
	if(state.saveTimeout !== null) {
		return
	}

	commit(mutations.SET_SAVE_TIMEOUT, {
		callback() {
			dispatch('saveNote')
			dispatch('stopSaveTimeout')
		},
		delay: 1000
	})
	// stop save
}


export const stopSaveTimeout = ({ commit, dispatch, state }) => {
	commit(mutations.CLEAR_SAVE_TIMEOUT)
}