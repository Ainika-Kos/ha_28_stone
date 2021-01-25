import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstrumentType } from '../../data/types';
import { Search } from '../search/search';
import { InstrumentGroup } from '../instrumentGroup/instrumentGroup';
import './marketView.scss';
import Loading from '../loading/loading';
import logo from '../../assets/images/logo.png';

export const MarketView = () => {

  const [instruments, setInstruments] = useState<InstrumentType[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);
   
  useEffect(() => {
    setLoading(true);
    const interval = setInterval(() => getData(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
    
  const getData = () => {

    axios.get('instruments.json')
      .then((response) => {

        const result: InstrumentType[] = response.data;

        const newResult = result.map((instrument) => {
          const newInstrument = { ...instrument };

          newInstrument.bidAmount += Math.floor(Math.random()*5);
          newInstrument.offerAmount += Math.floor(Math.random() * 5);
          newInstrument.bidPrice += Math.round(Math.random() * 10);
          newInstrument.offerPrice += Math.round(Math.random() * 1);

          return newInstrument;

        });

        setInstruments(newResult);
        setLoading(false);
      });
  };

  const newInstruments = [...instruments];

  const convertInput = (input: string): string => {
    return input
      .replace('bitcoin cash', 'bch')
      .replace('bitcoin', 'btc')
      .replace('ethereum', 'eth')
      .replace('ripple', 'xrp')
      .replace('litecoin', 'ltc');
  };

  const filteredInstruments = newInstruments.filter(({ currencyPair }) => {
    return currencyPair.toLowerCase()
      .includes(convertInput(searchWord.toLowerCase()));
  });

  const btc = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('BTC |'));
  const eth = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('ETH |'));
  const xrp = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('XRP |'));
  const bch = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('BCH |'));
  const ltc = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('LTC |'));

  const groupedInstruments = [
    {
      name: 'Bitcoin',
      image: 'btc',
      currencies: [...btc],
    },
    {
      name: 'Ethereum',
      image: 'eth',
      currencies: [...eth],
    },
    {
      name: 'Ripple',
      image: 'xrp',
      currencies: [...xrp],
    },
    {
      name: 'Bitcoin cash',
      image: 'bch',
      currencies: [...bch],
    },
    {
      name: 'Litecoin',
      image: 'ltc',
      currencies: [...ltc],
    },
  ];

    
  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="marketView__header">
            <div className="marketView__image-wrapper">
              <img className="marketView__logo" src={logo} alt="" />
            </div>
            <p className="marketView__heading">Welcome to the Market view</p>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <Search
            type="search"
            value={searchWord}
            placeholder="Enter currency single code / currency pair / currency name"
            onChange={(name: string) => setSearchWord(name)}
          />
        </div>
      </div>
      {!loading? (
        <div className="row">
          <div className="col-xs-12">
            <div className="marketView__groups">
              {groupedInstruments.map(({ name, image, currencies }) => {
                return (
                  <div key={name}>
                    <InstrumentGroup
                      instrumentArray={currencies}
                      currency={name}
                      image={image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="row center-xs">
          <div className="col-xs-12">
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};