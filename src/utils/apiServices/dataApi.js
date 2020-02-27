import { apiBase } from './urls';
import { request, getRequestConfig } from '@src/utils/apiServices/api';

export const urlData = `${apiBase}`;

export const getDataApi = () => {
    return request({
        ...getRequestConfig,
        url: urlData
    })
};
