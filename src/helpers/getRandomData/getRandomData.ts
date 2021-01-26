import { InstrumentType } from '../../types/types';

export const getRandomData = (result: InstrumentType[]): InstrumentType[] => {
  const newResult = result.map((instrument) => {
    const newInstrument = { ...instrument };

    newInstrument.bidAmount += Math.floor(Math.random()*5 +1);
    newInstrument.offerAmount += Math.floor(Math.random() * 5 +1);
    newInstrument.bidPrice += Math.round(Math.random() * 10 +1);
    newInstrument.offerPrice += Math.round(Math.random());

    return newInstrument;

  });
    
  return newResult;
    
};