import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InstrumentType } from '../../data/types';
import { InstrumentCard } from '../instrumentCard/InstrumentCard';
import './instrumentGroup.scss';

type InstrumentGroupType = {
  instrumentArray: InstrumentType[];
  currency: string;
  image: string;
};

export const InstrumentGroup: FC<InstrumentGroupType> =
    ({
      instrumentArray,
      currency,
      image,
    }) => {

    
      return (
        <div className="instrumentGroup">
          <div className="instrumentGroup__title">
            <img src={image} className="instrumentGroup__image" alt={currency} />
            <p className="instrumentGroup__title__text">{currency}</p>
          </div>
          {instrumentArray.map(({
            currencyPair,
            bidPrice,
            bidAmount,
            offerPrice,
            offerAmount
          }) => {
            return (
              <div key={uuidv4()}>
                <InstrumentCard
                  currencyPair={currencyPair}
                  bidPrice={bidPrice}
                  bidAmount={bidAmount}
                  offerPrice={offerPrice}
                  offerAmount={offerAmount}
                />
              </div>
            );
          })}
        </div>
      );
    };