import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DivLoader } from '@src/components/loaders';
import Employee from './Employee';
import { Pager } from '@src/components/pager';
import { getData } from '@src/store/actions/data';
import './style.scss'

export const Menu = () => {
    const dispatch = useDispatch();
   
    const {loading, info, itemsList, notify} = useSelector(state => {
        
        const data = {
            loading: state.data.get('loading'),
            info: state.data.get('info'),
            itemsList: state.data.get('itemsList'),
            notify: state.data.get('notify'),
        }

        return data;
    })

    React.useEffect(() => {
        dispatch(getData);
    }, []);


    // console.log('loading', loading, info, itemsList, notify);
    return (
        <DivLoader loading={loading}>
            <div className='container'>
                {/* <Pager data={data} perPage={5} component={Employee}/> */}
            </div>
        </DivLoader>
    )
}

export default Menu;