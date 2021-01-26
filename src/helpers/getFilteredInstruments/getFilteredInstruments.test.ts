import { InstrumentType } from '../../types/types';
import { getFilteredInstruments } from './getFilteredInstruments';

const instruments: InstrumentType[] = [
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
          
];

describe('getFilteredInstruments works correctly', () => {
  it('Should return filtered instruments by search word <ETH>', () => {
      
    const searchWord = 'ETH';
        
    const result = getFilteredInstruments(instruments, searchWord);

    const testArray: InstrumentType[] = [
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
    ];

    expect(result).toEqual(testArray);
      
  });
    
  it('Should return filtered instruments by search word <ripple>', () => {
      
    const searchWord = 'ripple';
        
    const result = getFilteredInstruments(instruments, searchWord);

    const testArray: InstrumentType[] = [
      {
        'currencyPair': 'XRP | USD',
        'bidPrice': 0.18624,
        'bidAmount': 35,
        'offerPrice': 0.19045,
        'offerAmount': 50
      },
    ];

    expect(result).toEqual(testArray);
      
  });
    
  it('Should return filtered instruments by search word <ether>', () => {
      
    const searchWord = 'ether';
        
    const result = getFilteredInstruments(instruments, searchWord);

    const testArray: InstrumentType[] = [
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
    ];

    expect(result).toEqual(testArray);
      
  });
    
  it('Should return filtered instruments by search word <bitcoin cash>', () => {
      
    const searchWord = 'bitcoin cash';
        
    const result = getFilteredInstruments(instruments, searchWord);

    const testArray: InstrumentType[] = [
      {
        'currencyPair': 'BCH | USD',
        'bidPrice': 9259.61,
        'bidAmount': 28,
        'offerPrice': 9285.75,
        'offerAmount': 70
      },
    ];

    expect(result).toEqual(testArray);
      
  });
    
  it('Should return filtered instruments by search word <Other currency>', () => {
      
    const searchWord = 'Other currency';
        
    const result = getFilteredInstruments(instruments, searchWord);

    const testArray: InstrumentType[] = [];

    expect(result).toEqual(testArray);
      
  });
});