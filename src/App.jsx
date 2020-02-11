import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Employees } from '@src/pages/employees';

import './styles/main.scss';


const App = () => (
    <Provider store={store}>
        <Employees />
    </Provider>
);

export default App;