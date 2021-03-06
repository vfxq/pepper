  
import { Map } from 'immutable';
import uuid from 'uuid';

export const jsonToMap = (data, Model) => {
    data.forEach(item => item.uuid = uuid());
    const handle = data.reduce((acc, el) => acc.set(el.uuid, new Model(el)), new Map({}));

    return handle
}