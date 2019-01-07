import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../Todos';

describe('<Todos />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Todos />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
