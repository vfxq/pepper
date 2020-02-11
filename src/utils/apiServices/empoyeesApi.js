import { apiBase } from './urls';
import { request, getRequestConfig } from '@src/utils/apiServices/api';

export const urlEmpoyeesList = `${apiBase}/list`;

export const getEmpoyeesApi = () => {
    return request({
        ...getRequestConfig,
        url: urlEmpoyeesList
    })
};
