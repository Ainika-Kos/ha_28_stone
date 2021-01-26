import React, { FC } from 'react';
import { InstrumentType } from '../../types/types';
import './InstrumentCard.scss';

export const InstrumentCard: FC<InstrumentType> =
  ({ currencyPair, bidPrice, bidAmount, offerPrice, offerAmount })  => {
  
    return (
      <div className="instrumentCard">
        <div className="instrumentCard__currency">
          <p>{currencyPair}</p>
        </div>
        <div className="instrumentCard__deal-info">
          <div className="instrumentCard__side">
            <span className="instrumentCard__amount">{bidAmount}</span>
            <span className="instrumentCard__price bid">{bidPrice}</span>
          </div>
          <div className="instrumentCard__side">
            <span className="instrumentCard__price offer">{offerPrice}</span>
            <span className="instrumentCard__amount">{offerAmount}</span>
          </div>
        </div>
      </div>
    );
  };