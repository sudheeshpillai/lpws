import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Login Component', () => {

    const props = {
        username: '',
        password: '',
        rememberMe: true,
        invalidCredentials: false,
        onLogin: jest.fn(),
        onRememberMe: jest.fn(),
        onInputChange: jest.fn()
    }

    const wrapper = shallow(<Login {...props} />)

    it('should render a form', () => {
        expect(wrapper.find('form').exists()).toBe(true);
    });

    it('should call onLogin function twice', () => {
        wrapper.find('form').simulate('submit');
        wrapper.find('button').simulate('click');
        expect(props.onLogin.mock.calls.length).toBe(2);
    });

    it('should call onRememberMe function once', () => {
        wrapper.find('input[type="checkbox"]').simulate('change');
        expect(props.onRememberMe.mock.calls.length).toBe(1);
    });

    it('should call onInputChange function once', () => {
        wrapper.find('input[type="text"]').simulate('change', { target: { value: 'test' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { value: 'test' } });
        expect(props.onInputChange.mock.calls.length).toBe(2);
    });

    it('should have correct values set for username, password and rememberMe', () => {
        const username = 'studiouser', password = 'password-1', rememberMe = false;
        wrapper.setProps({ username, password, rememberMe });
        expect(wrapper.find('input[type="text"]').prop('value')).toBe(username);
        expect(wrapper.find('input[type="password"]').prop('value')).toBe(password);
        expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(rememberMe);
        expect(wrapper.find('div.error').length).toBe(0);
    });

    it('should have show error message,if invalid credentials are entered', () => {
        wrapper.setProps({ invalidCredentials: true });
        expect(wrapper.find('div.error').length).toBe(1);
    });

});

