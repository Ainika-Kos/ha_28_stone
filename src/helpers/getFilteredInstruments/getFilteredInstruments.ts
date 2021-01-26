import { InstrumentType } from '../../types/types';

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
    .replace(/bitcoin\sc(a(s(h)?)?)?/, 'bch')
    .replace(/bi(t(c(o(in?)?)?)?)?/, 'btc')
    .replace(/ethe(r(e(u(m)?)?)?)?/, 'eth')
    .replace(/ri(p(p(l(e)?)?)?)?/, 'xrp')
    .replace(/li(t(e(c(o(i(n)?)?)?)?)?)?/, 'ltc');
};