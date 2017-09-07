import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Home from './Home';

describe('App Component', () => {

    const props = {
        username: 'studiouser'
    }

    const wrapper = shallow(<Home {...props} />)

    it('should render welcome message with username', () => {
        expect(wrapper.find('div.welcome-message').text()).toBe('Welcome ' + props.username);
    });

});

