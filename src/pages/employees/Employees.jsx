import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DivLoader } from '@src/components/loaders';
import Employee from './Employee';
import { Pager } from '@src/components/pager';
import { getEmployees } from '@src/store/actions/employees';
import './style.scss'

export const Employees = () => {
    const dispatch = useDispatch();
   
    const { loading, data } = useSelector(state => {
        const { loading, data } = state.employees;
        const dataArr = data.toArray();

        return {loading, data: dataArr}
    })

    React.useEffect(() => {
        dispatch(getEmployees);
    }, []);

    return (
        <DivLoader loading={loading}>
            <div className='container'>
                <Pager data={data} perPage={5} component={Employee}/>
            </div>
        </DivLoader>
    )
}

export default Employees;
