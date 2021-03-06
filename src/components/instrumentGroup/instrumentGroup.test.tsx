import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { InstrumentGroup } from './instrumentGroup';
import { InstrumentCard } from '../instrumentCard/InstrumentCard';

Enzyme.configure({ adapter: new Adapter() });

const currencies = [{
  'currencyPair': 'ETH | CHF',
  'bidPrice': 225.57,
  'bidAmount': 10,
  'offerPrice': 235.42,
  'offerAmount': 30
},
];
const currency = 'Ethereum';
const image = 'Image source 2';

it('renders correctly', () => {
  const tree = renderer
    .create(<InstrumentCard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    

describe('Rendering InstrumentGroup component without crashing', () => {
  const wrapper = shallow(
    <InstrumentGroup
      instrumentArray={currencies}
      currency={currency[0]}
      image={image}
    />
  );
    
  it('renders <InstrumentGroup /> component', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('renders <InstrumentCard /> component', () => {
    expect(wrapper.find('InstrumentCard')).toHaveLength(1);
  });
  
});

describe('Passing props to InstrumentCard', () => {

  const wrapper = shallow(
    <InstrumentCard
      currencyPair={currencies[0].currencyPair}
      bidPrice={currencies[0].bidPrice}
      bidAmount={currencies[0].bidAmount}
      offerPrice={currencies[0].offerPrice}
      offerAmount={currencies[0].offerAmount}
    />
  );
     
  it('accepts currency pair prop', () => {
    expect(wrapper.contains(<p>{currencies[0].currencyPair}</p>)).toBeTruthy();
  });
       
  it('accepts currency bid amount prop', () => {
    expect(wrapper.contains(<span className="instrumentCard__amount">{currencies[0].bidAmount}</span>)).toBeTruthy();
  });
      
  it('accepts currency bid price prop', () => {
    expect(wrapper.contains(<span className="instrumentCard__price bid">{currencies[0].bidPrice}</span>)).toBeTruthy();
  });
    
  it('accepts currency offer price prop', () => {
    expect(wrapper.contains(<span className="instrumentCard__price offer">{currencies[0].offerPrice}</span>)).toBeTruthy();
  });
    
  it('accepts currency offer amount prop', () => {
    expect(wrapper.contains(<span className="instrumentCard__amount">{currencies[0].offerAmount}</span>)).toBeTruthy();
  });
});






  