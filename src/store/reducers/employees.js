import {Map, Record} from 'immutable';
import { jsonToMap } from '@src/utils/structures';
import user from '@src/images/static/user.png';
import { 
    GET_EMPLOYEES_START, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_ERROR,
} from '../types';

const EmployeeModel = Record({
    uuid: null,
    avatar: user,
    company: null,
    bio: null,
    name:  null,
    title:  null,
    meta: {}
})

const ReducerState = Record({
	data: new Map(),
	notify: false,
	loading: false
})


export default (state = new ReducerState(), action) => {
    switch (action.type) {
        case GET_EMPLOYEES_START:
            return state
	 		 	.set('notify', false)
	 		 	.set('loading', true);
        case GET_EMPLOYEES_SUCCESS:
            return state
                .set('data', jsonToMap(action.payload, EmployeeModel))
	 		 	.set('notify', false)
	 		 	.set('loading', false);
        case GET_EMPLOYEES_ERROR:
            return state
	 		 	.set('notify', action.error)
	 		 	.set('loading', false);
        default:
            return state;
    }
};