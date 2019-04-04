import * as ActionTypes from './actionTypes'
import { handle } from 'redux-pack';
import _ from 'lodash';

export const initialState = {
	keys: [],
	data: {},
	loading: false,
	error: false,
	lastUpdate: 0,
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.UPDATE_STATIC_CONTENT: {
			const data = {}
			const keys = _.map(action.payload, ({ key, content }) => {
				data[key.trim()] = content;
				return key.trim();
			});

			return handle(state, action, {
				start: prevState => ({ ...prevState, loading: true, error: false }),
				finish: prevState => ({ ...prevState, loading: false }),
				failure: prevState => ({ ...prevState, error: true }),
				success: prevState => ({ ...prevState, data, keys, lastUpdate: Date.now() }),
			})
		}
		default: return state;
	}
}