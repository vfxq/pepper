import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import uuid from 'uuid';

let noticeses = [];
    
const handleQueue = key => {
    if (noticeses.length > 2) {
        notification.close(noticeses[0]);
        noticeses.shift(noticeses[0])
    }

    noticeses.push(key);
}

const setParams = options => {
    const mode = options && options.response && options.status.response ? options.status.response : 'error';
    const modeNotify = switchType(mode) !== 'error' ? 'ant-notification-notice-notify' : 'ant-notification-notice-error';

    return modeNotify;
}

const switchType = mode => {
    switch(mode){
        case 400:
        case 403:
        case 404:
        case 500:
        case 502:
        case 503:
        case 504:
        case 'error':
            return 'error';
        default:
            return 'success';
    }
}

const Notify = ({notifys}) => {
    useEffect(() => {
        notifys.forEach(notify => {
            if(notify){
                const messageBody = notify.response && notify.response.statusText ? notify.response.statusText : '';
                const errorMessageBody = notify.response && notify.response.data ? notify.response.data.notifyMessage : '';

                const keyNotice = uuid();
                handleQueue(keyNotice);
                
                const notifyMode = switchType(notify.response && notify.response.status ? notify.response.status : 'error');
                
                notification[notifyMode](
                    {
                        key: keyNotice,
                        duration: 100,
                        message: `${notifyMode}: ${messageBody}`,
                        description: errorMessageBody,
                        className: setParams(notify)
                    },
                )
            }
        })

    }, [notifys]);

    return null;
    
};

const mapStateToProps = state => {
    const notifys = [];
    
    // This cycle check all redusers for property 'error',
    // if reducer has it, this reducer will be added to handle of errors
    for(const reducer in state){
        if(Object.prototype.hasOwnProperty.call(state, reducer)){
            if('notify' in state[reducer]){
                notifys.push(state[reducer].notify);
            }
        }
    }
    
    return {
        notifys,
    }
}

export default connect(mapStateToProps)(Notify);