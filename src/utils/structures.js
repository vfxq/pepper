  
import { Map } from 'immutable';

export const jsonToMap = (data, Model) => {
  	let newData = [];
	
	for(const item in data){
		newData.push(data[item]);
	}
	
 	return newData.reduce((acc, el) => acc.set(el.uuid, new Model(el)), new Map({}));
}