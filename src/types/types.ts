export type InstrumentType = {
  currencyPair: string;
  bidPrice: number;
  bidAmount: number;
  offerPrice: number;
  offerAmount: number; 
};

export type GroupedInstrumentType = {
  name: string;
  image: string;
  currencies: InstrumentType[];
};