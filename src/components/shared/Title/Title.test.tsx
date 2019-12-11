import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title text='Profile settings' variant='h3'/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
