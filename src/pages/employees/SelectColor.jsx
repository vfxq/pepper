import React, {useState} from 'react';
import { Row, Col, Select } from 'antd';
import uuid from 'uuid';

const { Option } = Select;

const handleChange = ev => {
    console.log('handleChange', ev);
}


const SelectColor = ({colors}) => (
    <Select
        defaultValue="white"
        onChange={handleChange}
        style={{'width': '80px'}}
    >
        {
            colors.map(color => <Option value={color} key={uuid()}>{color}</Option>)
        }
    </Select>
);

export default SelectColor;