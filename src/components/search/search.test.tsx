import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Search } from './search';

Enzyme.configure({ adapter: new Adapter() });

describe('Rendering Search component without crashing', () => {
  it('renders <Search /> component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Rendering Search content without chrashing', () => {
  it('renders search text', () => {
    const wrapper = shallow(<Search />);
        
    const text = (<h3 className="search__text">Search:</h3>);
        
    expect(wrapper.contains(text)).toBe(true);
  });
});