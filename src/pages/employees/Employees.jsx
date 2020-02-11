import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DivLoader } from '@src/components/loaders';
import Employee from './Employee';
import { PagerTest, Pager } from '@src/components/pager';
import { getEmployees } from '@src/store/actions/employees';

import './style.scss'

export const Employees = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => {
        const { data, loading } = state.employees;
        const employees = [];

        for(const employee in data){
            employees.push(data[employee]);
        }

        return { data: employees, loading }
    });
    
    React.useEffect(() => {
        dispatch(getEmployees);
    }, []);

    return (
        <DivLoader loading={loading}>
            <div className='container'>
            <Pager data={data} perPage={5} component={Employee}/>
            {/* <PagerTest data={data} perPage={10}>
                {
                    ({ pageData }) => (
                        <div className='container'>
                            {
                                pageData.map(employee => (
                                    <Employee employee={employee} key={employee.uuid} />
                                ))
                            }
                        </div>  
                    )
                }
                
            </PagerTest> */}
            </div>
        </DivLoader>
    )
}

export default Employees;
