import { getComplexData } from './getComplexInstruments';

describe('getComplexData works correctly', () => {
  it('Should return right array with testing arguments', () => {
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
          
    ];
    
    const result = getComplexData(instruments);
      
    const testArray = [
      {
        name: 'Bitcoin',
        image: 'btc',
        currencies: [],
      },
      {
        name: 'Ethereum',
        image: 'eth',
        currencies: [
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
        ],
      },
      {
        name: 'Ripple',
        image: 'xrp',
        currencies: [
          {
            'currencyPair': 'XRP | USD',
            'bidPrice': 0.18624,
            'bidAmount': 35,
            'offerPrice': 0.19045,
            'offerAmount': 50
          }, ],
      },
      {
        name: 'Bitcoin cash',
        image: 'bch',
        currencies: [
          {
            'currencyPair': 'BCH | USD',
            'bidPrice': 9259.61,
            'bidAmount': 28,
            'offerPrice': 9285.75,
            'offerAmount': 70
          },
        ],
      },
      {
        name: 'Litecoin',
        image: 'ltc',
        currencies: [],
      },
    ];
      
    expect(result).toEqual(testArray);
  });
});
