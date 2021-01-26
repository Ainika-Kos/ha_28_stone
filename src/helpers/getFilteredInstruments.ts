import { InstrumentType } from '../data/types';

export const getFilteredInstruments =
    (instruments: InstrumentType[], searchWord: string): InstrumentType[] => {

      const filteredInstruments = instruments.filter(({ currencyPair }) => {
        return currencyPair.toLowerCase()
          .includes(convertInput(searchWord.toLowerCase()));
      });
        
      return filteredInstruments;
    };

const convertInput = (input: string): string => {
  return input
    .replace('bitcoin cash', 'bch')
    .replace('bitcoin', 'btc')
    .replace('ethereum', 'eth')
    .replace('ripple', 'xrp')
    .replace('litecoin', 'ltc');
};