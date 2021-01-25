/* eslint-disable prefer-template */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MarketView } from './marketView';
import { InstrumentGroup } from '../instrumentGroup/instrumentGroup';
import { InstrumentCard } from '../instrumentCard/InstrumentCard';
import { Search } from '../search/search';

Enzyme.configure({ adapter: new Adapter() });

describe('Rendering MarketView components without crashing', () => {
  it('renders <MarketView /> component', () => {
    const wrapper = shallow(<MarketView />);
    expect(wrapper).toHaveLength(1);
  });
  it('renders <Search /> component', () => {
    const wrapper = shallow(<MarketView />);
    expect(wrapper.find('Search')).toHaveLength(1);
  });
  it('renders <InstrumentGroup /> component', () => {
    const wrapper = shallow(<MarketView />);
    expect(wrapper.find('InstrumentGroup')).toHaveLength(5);
  });
});

describe('Rendering MarketView content without chrashing', () => {
  it('renders heading', () => {
    const wrapper = shallow(<MarketView />);
      
    const header = (
      <p className="marketView__heading">Welcome to the Market view</p>
    );
      
    expect(wrapper.contains(header)).toBe(true);
  });
});

describe('Passing props to InstrumentGroup', () => {

  const currencies = [{
    'currencyPair': 'LTC | USD',
    'bidPrice': 57.16,
    'bidAmount': 20,
    'offerPrice': 59.29,
    'offerAmount': 10
  }, ];
  const currency = 'Bitcoin';
  const image = 'btc';
    
  const wrapper = shallow(
    <InstrumentGroup
      instrumentArray={currencies}
      currency={currency}
      image={image}
    />
  );

  it('accepts currency name prop', () => {
    expect(wrapper.contains(<p className="instrumentGroup__title__text">Bitcoin</p>)).toBeTruthy();
  });
     
  it('accepts currency image prop', () => {
    expect(wrapper.contains(<img src="/logo/btc.png" className="instrumentGroup__image" alt="Bitcoin" />)).toBeTruthy();
  });
    
  it('accepts currencies array prop', () => {
    expect(wrapper.contains(<InstrumentCard currencyPair="LTC | USD" bidPrice={57.16} bidAmount={20} offerPrice={59.29} offerAmount={10} />)).toBeTruthy();
  });
});

describe('Rendering 5 cards with props', () => {

  const instruments = [
    {
      'currencyPair': 'ETH | CHF',
      'bidPrice': 225.57,
      'bidAmount': 10,
      'offerPrice': 235.42,
      'offerAmount': 30
    },
    {
      'currencyPair': 'ETH | USD',
      'bidPrice': 239.04,
      'bidAmount': 90,
      'offerPrice': 285.75,
      'offerAmount': 40
    },
    {
      'currencyPair': 'XRP | USD',
      'bidPrice': 0.18624,
      'bidAmount': 35,
      'offerPrice': 0.19045,
      'offerAmount': 50
    },
    {
      'currencyPair': 'BCH | USD',
      'bidPrice': 9259.61,
      'bidAmount': 28,
      'offerPrice': 9285.75,
      'offerAmount': 70
    },
    {
      'currencyPair': 'LTC | USD',
      'bidPrice': 57.16,
      'bidAmount': 20,
      'offerPrice': 59.29,
      'offerAmount': 10
    },
  ];

  const wrapper = shallow(
    <InstrumentGroup
      instrumentArray={instruments}
      currency="name"
      image="image"
    />
  );
  expect(wrapper.find('InstrumentCard')).toHaveLength(5);

});

// describe('Changes search word', () => {
//   it('changes search word on change', () => {
//     const newValue = 'testing component';
//     const wrapper = shallow(<MarketView />);
//     const input = wrapper.find('Search');
//     console.log(input.debug());
//     input.simulate('change', { target: { value: newValue } });
//     expect(input.props().value).toEqual(newValue);
//   });
// });








