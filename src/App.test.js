import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Login from './Login';
import Home from './Home';

describe('App Component', () => {

  const wrapper = shallow(<App />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render Login Component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should render Home Component', () => {
    wrapper.setState({ loggedIn: true });
    expect(wrapper.find(Home).exists()).toBe(true);
  });

});

