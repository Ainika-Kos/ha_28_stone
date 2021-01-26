import { InstrumentType, GroupedInstrumentType } from '../data/types';

export const getComplexData =
    (instruments: InstrumentType[]): GroupedInstrumentType[] => {
    
      const groupedInstruments = [
        {
          name: 'Bitcoin',
          image: 'btc',
          currencies: filterInstruments(instruments, 'BTC |'),
        },
        {
          name: 'Ethereum',
          image: 'eth',
          currencies: filterInstruments(instruments, 'ETH |'),
        },
        {
          name: 'Ripple',
          image: 'xrp',
          currencies: filterInstruments(instruments, 'XRP |'),
        },
        {
          name: 'Bitcoin cash',
          image: 'bch',
          currencies: filterInstruments(instruments, 'BCH |'),
        },
        {
          name: 'Litecoin',
          image: 'ltc',
          currencies: filterInstruments(instruments, 'LTC |'),
        },
      ];
        
      return groupedInstruments;

    };

const filterInstruments =
    (instruments: InstrumentType[], currencyCode: string): InstrumentType[] => {
      return instruments
        .filter(({ currencyPair }) => currencyPair.includes(currencyCode));
    };