import React, { Component } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import ShowMore from './ShowMore';
import Spinner from './styles/Spinner';
import ListBar from './styles/ListBar';

const CardsListStyled = styled.ul`
	list-style: none;
	margin-bottom: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

class CardsList extends Component {
	render() {
		const { data, isLoading, filter } = this.props;

		return (
			<CardsListStyled>
				{ data.length > 0 
            && <ListBar>
              Cards <strong>{data.length}</strong>
            </ListBar>
        }

				{ 
					data && data.length > 0
						? data.slice(0, filter.dataPointer || filter.dataOffcut).map(card => <CardItem key={card.id} details={card} />)
						: isLoading 
							? <Spinner /> 
							: 'Sorry, no cards'
				}

				{
					(data.length - filter.dataPointer > 0 && data.length - filter.dataOffcut > 0)
						&& <ShowMore/>
				}
			</CardsListStyled>
		);
	}
}

export default CardsList;