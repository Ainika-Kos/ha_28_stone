import { InstrumentType } from '../types/types';

export const getFilteredInstruments =
    (instruments: InstrumentType[], searchWord: string): InstrumentType[] => {

      const filteredInstruments = instruments.filter(({ currencyPair }) => {
        return currencyPair.toLowerCase()
          .includes(convertInput(searchWord.toLowerCase()));
      });
        
      return filteredInstruments;
    };

// regex replacement for searching by currency name

const convertInput = (input: string): string => {
  return input
    .replace('bitcoin cash', 'bch')
    .replace('bitcoin cas', 'bch')
    .replace('bitcoin ca', 'bch')
    .replace('bitcoin c', 'bch')
    .replace('bitcoin', 'btc')
    .replace('bitcoi', 'btc')
    .replace('bitcoi', 'btc')
    .replace('bitco', 'btc')
    .replace('bitc', 'btc')
    .replace('bit', 'btc')
    .replace('bi', 'btc')
    .replace('ethereum', 'eth')
    .replace('ethereu', 'eth')
    .replace('ethere', 'eth')
    .replace('ether', 'eth')
    .replace('ethe', 'eth')
    .replace('ripple', 'xrp')
    .replace('rippl', 'xrp')
    .replace('ripp', 'xrp')
    .replace('rip', 'xrp')
    .replace('ri', 'xrp')
    .replace('litecoin', 'ltc')
    .replace('litecoi', 'ltc')
    .replace('liteco', 'ltc')
    .replace('litec', 'ltc')
    .replace('lite', 'ltc')
    .replace('lit', 'ltc')
    .replace('li', 'ltc');
};