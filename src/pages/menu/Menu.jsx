import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DivLoader } from '@src/components/loaders';
import { Row, Col, Input } from 'antd';
import { getData } from '@src/store/actions/data';
import './style.scss'

const { TextArea } = Input;

const renderParams = params => {
    const data = []

    for(const item in params){
        data.push(<li key={item}>{item}: <Input defaultValue={params[item]} style={{'width': '50px'}}/></li>);
    }
    return data;
}

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

    const handleClick = ev => {

    }
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
                                <Col span={3} >
                                    <Input defaultValue={value.name} />
                                </Col>
                                <Col span={5}>
                                    <TextArea defaultValue={value.description} />
                                </Col>
                                <Col span={3} offset={1}>
                                    <Input defaultValue={value.price} />
                                </Col>
                                <Col span={4} offset={1}>
                                    <ul>
                                        {
                                            renderParams(value.nutritionalInformation)
                                        }
                                    </ul>
                                </Col>
                                <Col span={2}>
                                    <Input defaultValue={value.quantity} />
                                </Col>
                            </Row>
                        )
                    }
                
            </div>
        </DivLoader>
    )
}

export default Menu;
