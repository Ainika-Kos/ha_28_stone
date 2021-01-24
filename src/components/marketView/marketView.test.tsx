import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MarketView } from './marketView';
import { InstrumentGroup } from '../instrumentGroup/instrumentGroup';
import { InstrumentCard } from '../instrumentCard/InstrumentCard';

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
      <div className="marketView__header">
        <img className="marketView__logo" src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Diamond-Logo.wine.svg" alt="" />
        <h3 className="marketView__heading">Welcome to the Market view</h3>
      </div>
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
  const image = 'Image source';
    
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
    expect(wrapper.contains(<img src="Image source" className="instrumentGroup__image" alt={currency} />)).toBeTruthy();
  });
    
  it('accepts currencies array prop', () => {
    expect(wrapper.contains(<InstrumentCard currencyPair="LTC | USD" bidPrice={57.16} bidAmount={20} offerPrice={59.29} offerAmount={10} />)).toBeTruthy();
  });
});


