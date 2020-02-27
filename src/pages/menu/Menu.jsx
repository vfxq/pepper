import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DivLoader } from '@src/components/loaders';
import { Row, Col } from 'antd';
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

    return (
        <DivLoader loading={loading}>
            <div className="container">
                <Row>
                    <Col span={3}>
                        {info.locationTitle}
                    </Col>
                    <Col span={3} offset={18}>
                        {info.address}
                    </Col>
                </Row>
        
              
                    {
                        itemsList.toArray().map(value => 
                            <Row key={value.uuid}>
                                <Col span={3} offset={1}>
                                    {value.name}
                                </Col>
                                <Col span={5}>
                                    {value.description}
                                </Col>
                                <Col span={2} offset={1}>
                                    {value.price}
                                </Col>
                                <Col span={2}>
                                    {value.quantity}
                                </Col>
                            </Row>
                        )
                    }
                
            </div>
        </DivLoader>
    )
}

export default Menu;
