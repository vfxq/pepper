import React from 'react';
import { Icon, Spin } from 'antd';

import loader from '@src/images/loaders/loader.gif';
import { LOADING } from './templates';
import './styles.scss';


const LoadIndicator = <Icon component={() => <img src={`${loader}`} alt={`${LOADING}`} className="load-indicator" />} />

const DivLoader = ({ loading, children }) => (
    <Spin
        tip={LOADING}
        indicator={LoadIndicator}
        spinning={loading}  
    >
        {children}                
    </Spin>
);



export default DivLoader;