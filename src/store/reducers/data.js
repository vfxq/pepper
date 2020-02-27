import {Map, Record} from 'immutable';
import { jsonToMap } from '@src/utils/structures';
import user from '@src/images/static/user.png';
import { 
    GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR,
} from '../types';

const itemModel = Record({
    name:  null,
    description:  null,
    price: null,
    nutritionalInformation: {},
    quantity: null,
    uuid: null
})

const info = Record({
    locationId: null,
    locationTitle: null,
    address: null
})

const ReducerState = Record({
    info: info,
    itemsList: new Map(),
	notify: false,
	loading: false
})


export default (state = new ReducerState(), action) => {
    switch (action.type) {
        case GET_DATA_START:
            return state
	 		 	.set('notify', false)
	 		 	.set('loading', true);
        case GET_DATA_SUCCESS:
            const {items, ...info} = action.payload;
            
            return state
                .set('info', info)
                .set('itemsList', jsonToMap(items, itemModel))
	 		 	.set('notify', false)
	 		 	.set('loading', false);
        case GET_DATA_ERROR:
            return state
	 		 	.set('notify', action.error)
	 		 	.set('loading', false);
        default:
            return state;
    }
};