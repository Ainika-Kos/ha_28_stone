import React, { FC } from 'react';
import { InstrumentType } from '../../types/types';
import { InstrumentCard } from '../instrumentCard/InstrumentCard';
import './instrumentGroup.scss';

type InstrumentGroupType = {
  instrumentArray: InstrumentType[];
  currency: string;
  image: string;
};

export const InstrumentGroup: FC<InstrumentGroupType> =
  ({ instrumentArray, currency, image, }) => {

    const imageURL = `${process.env.PUBLIC_URL}/logo/${image}.png`;
    return (
      <div className="instrumentGroup">
        <div className="instrumentGroup__title">
          <img src={imageURL} className="instrumentGroup__image" alt={currency} />
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
            <div key={currencyPair}>
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