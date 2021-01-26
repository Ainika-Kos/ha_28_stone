import { getRandomData } from './getRandomData';

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

describe('Should return instruments with changed data', () => {
  it('Should return instruments array of objects with other data', () => {
      
    const result = getRandomData(instruments);
      
    expect(result).toHaveLength(instruments.length);
    expect(result).not.toEqual(instruments);
  });
});