import React from 'react';
import Fetch from './Fetch';
import CardsList from './CardsList';
import CardsSearch from './CardsSearch';
import { filterName } from '../selectors';

const Cards = ({location}) => {
  return (
    <Fetch 
      type="cards"
      // router query string
      query={location.search}
      render={({ data, isLoading, filter }) => (
        <div className="container">
          { 
            (data.cards && data.cards.length > 0) 
              && <CardsSearch set={data.cards[0].set} />
          }
          <CardsList data={filterName(data.cards, filter.cardName)} filter={filter} isLoading={isLoading} />
        </div>
      )} 
    />
  );
};

export default Cards;