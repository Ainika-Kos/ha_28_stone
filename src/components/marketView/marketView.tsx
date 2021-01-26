import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InstrumentType } from '../../types/types';
import { Search } from '../search/search';
import { InstrumentGroup } from '../instrumentGroup/instrumentGroup';
import { getRandomData } from '../../helpers/getRandomData';
import { getFilteredInstruments } from '../../helpers/getFilteredInstruments';
import { getComplexData } from '../../helpers/getComplexInstruments';
import Loading from '../loading/loading';
import logo from '../../assets/images/logo.png';
import './marketView.scss';

export const MarketView = () => {

  const [instruments, setInstruments] = useState<InstrumentType[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);

  // getting data from instruments.json => update with a different random value     
  const getData = () => {
    axios.get('instruments.json')
      .then((response) => {
        const result: InstrumentType[] = response.data;
        setInstruments(getRandomData(result));
        setLoading(false);
      });
  };
   
  // get data on mounting and each second
  useEffect(() => {
    setLoading(true);
    const interval = setInterval(() => getData(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // instruments filtered by searchWord
  const filteredInstruments = getFilteredInstruments(instruments, searchWord);

  // instruments grouped in different arrays by left currency 
  const groupedInstruments = getComplexData(filteredInstruments);

    
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