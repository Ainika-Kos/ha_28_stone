import { InstrumentType } from '../data/types';

export const getRandomData = (result: InstrumentType[]): InstrumentType[] => {
  const newResult = result.map((instrument) => {
    const newInstrument = { ...instrument };

    newInstrument.bidAmount += Math.floor(Math.random()*5);
    newInstrument.offerAmount += Math.floor(Math.random() * 5);
    newInstrument.bidPrice += Math.round(Math.random() * 10);
    newInstrument.offerPrice += Math.round(Math.random() * 1);

    return newInstrument;

  });
    
  return newResult;
    
};