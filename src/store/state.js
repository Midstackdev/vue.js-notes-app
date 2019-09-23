import { defaultNoteState } from './defaults'
import { clone } from 'lodash'

export default {
	note: _.clone(defaultNoteState),

	notes: JSON.parse(localStorage.getItem('notes')) || [],

	saveTimeout: null
}