import { 
    GET_EMPLOYEES_START, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_ERROR,
} from '../types';

const mock = [
    {
        uuid: "b7e51527-fef8-339e-95d7-2966daf18ed2",
        company: "Balistreri-Jenkins",
        bio: "VBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADsklEQVRYR63XdwincxwH8NeZGWXGnR",
        name: "King Schmidt III",
        title: "Rotary Drill Operator",
        avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADsklEQVRYR63XdwincxwH8NeZGWXGnRWZiSJ/kGRlJMqI0+FynSI7skpmnGzJzChd54pkZkUJ2WVE6cqR7BHK3r2v76Pnfvc83+e5zqd+f/z6fcb795nv7xTjZXUciL2xAzbHGvgHP+ADvIln8QR+GuN6ygilzXAOZuIPPIc38CG+L/ZrYgvshD2xHO7BVfi4FqMGYGWcj3PxMm7A4/h9AHTsDsKZBdAcXFHAL2HaB2ATPIB1cHJJ6YhkLaYS3wFyEz7D4fh00kkXgG3wDF7HrFLfLrv0wMblh/fwVQ/CtTAX22NfLGjrTQLIP38JT+IE/DXhNPqn4qxW8Kj8jWtxIX7tALIC7ir9sWs7E20Aqd2L+KSkazJ4/N6Mkyq1+BkX4+oeEA9hbezR9EQbwKU4Bjv2pD0dnu4fIweULE7qJvhbuB2X58cGQEbtfRxSabh08nljouNeHN2jmxjzsWWy3QC4FduW1PTFuL+UZgyG17Bzj2Jips/S5KflSzbcFyX9qVGfPFgyNAbAq9ilojgdd2BqAByJ27D+wJK5E8eNiY78kUMruquUsZ0ZAGmI9QYM4uvsslrHYLikTENNN1t1YQAkXY80XVmx2A9PjYmO/fH0gG6mbq8A+CbNUDq3ZrM0JUhJTxwAcGxuRADkwh1cDk3NJqU6fmQGsv+zMWuSmPMDINcts5ma1CSLKCXIgarJ19gH7wzoJea8AIjB6SNKEH/Ry1muSa7nLSMylUM3JwBeKf8+TTEkOVYLsXyP4p/YtOvsduhfht0DIFtwg9IHQwDy+3U4o0fx+kJExvjJxV0QACEKOZXZBb+NsEwPZHK6JMusjxe09VctpZ8RAKuVVZyahAUNSS7atz1KU/HlkAPMKH0yrTlGGZuc4d0Ky635SI1DSLtk60nG06GUmDlWL6RcDYA0V6jSEXi0Ej3MJmz3qB6d+8pRy27pk5Q8PsKiP28TktCpHJtw/u8mrBM4cxudcLuavIvcglzPSVa1Lt7GjbgyTtoAVsTzpb4JlpHKdISCzca0EbVtq4QB311qnXMf/48hlzCPm/hfDEC+b1jIQuoTo1MQrrgsEpKa5ZXeCUkJKY3vRdJFy7cqr590+7IGb+JkvDO6IaN5wv0nfQ+TZOJhbPc/gPilENHD2v+8loHmt9QsJPSCMporLWUdfix1v6i8GRbVfFLGPE43KkDSiAEVm9otSIzUPZzvmvIs68U+BkBjnO4N08knhDNNlS0ayYPko/KwCRPKp+uFtASQfwFMNb0ytvWaBAAAAABJRU5ErkJggg==",
    }
]
export const initialState = {
    loading: false,
    data: {} ,
    notify: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_START:
            return { ...state, loading: true, notify: false };
        case GET_EMPLOYEES_SUCCESS:
            return { 
                ...state, data: action.payload, loading: false, notify: false,
            };
        case GET_EMPLOYEES_ERROR:
            return { 
                ...state, loading: false, notify: action.error,
            };
        default:
            return state;
    }
};