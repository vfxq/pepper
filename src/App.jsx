import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Menu } from '@src/pages/menu';

import './styles/main.scss';

const App = () => (
    <Provider store={store}>
        <Menu />
    </Provider>
);

export default App;