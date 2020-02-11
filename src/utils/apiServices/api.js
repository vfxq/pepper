import axios from 'axios';

const commonRequestConfig = {
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Authorization: 'Basic aGFyZDpoYXJk',
        Accept: 'application/json',
    },
    data: {},
};

export const getRequestConfig = {
    method: 'get',
};

// Using for any request
export const request = async ({
    data, url, method, ...restParams
}) => {
   
    const result = await axios({
        ...commonRequestConfig,
        method,
        url,
        data,
        ...restParams,
    })
    
    return {...result.data};
};
