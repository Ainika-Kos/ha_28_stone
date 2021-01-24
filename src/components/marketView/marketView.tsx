import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstrumentType } from '../../data/types';
import { Search } from '../search/search';
import { InstrumentGroup } from '../instrumentGroup/instrumentGroup';
import './marketView.scss';

export const MarketView = () => {

  const [instruments, setInstruments] = useState<InstrumentType[]>([]);
  const [searchWord, setSearchWord] = useState('');
   
  useEffect(() => {
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
      });
  };

  const newInstruments = [...instruments];

  const filteredInstruments = newInstruments.filter(({ currencyPair }) => {
    return currencyPair.toLowerCase().includes(searchWord.toLowerCase());
  });

  const btc = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('BTC |'));
  const eth = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('ETH |'));
  const xrp = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('XRP |'));
  const bch = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('BCH |'));
  const ltc = filteredInstruments.filter(({ currencyPair }) => currencyPair.includes('LTC |'));

  const groupedInstruments = [
    {
      name: 'Bitcoin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
      currencies: [...btc],
    },
    {
      name: 'Ethereum',
      image: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
      currencies: [...eth],
    },
    {
      name: 'Ripple',
      image: 'https://cdn.iconscout.com/icon/free/png-512/ripple-1-441950.png',
      currencies: [...xrp],
    },
    {
      name: 'Bitcoin cash',
      image: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-Cash-BCH-icon.png',
      currencies: [...bch],
    },
    {
      name: 'Litecoin',
      image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
      currencies: [...ltc],
    },
  ];

    
  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="marketView__header">
            <img className="marketView__logo" src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Diamond-Logo.wine.svg" alt="" />
            <h3 className="marketView__heading">Welcome to the Market view</h3>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <Search
            type="search"
            value={searchWord}
            placeholder="Enter currency code"
            onChange={(name: string) => setSearchWord(name)}
          />
        </div>
      </div>
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
    </div>
  );
};