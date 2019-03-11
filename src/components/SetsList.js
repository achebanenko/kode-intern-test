import React, { Component } from 'react';
import styled from 'styled-components';
import SetItem from './SetItem';
import ShowMore from './ShowMore';
import Spinner from './styles/Spinner';
import ListBar from './styles/ListBar';

const SetsListStyled = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class SetsList extends Component {
  render() {
    const { data, isLoading, filter } = this.props;

    return (
      <SetsListStyled>
        { data.length > 0 
            && <ListBar>
              Sets {filter.setsSeries} <strong>{data.length}</strong>
            </ListBar>
        }

        { 
          data && data.length > 0 
            ? data
              .sort((a,b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
              // pagination
              .slice(0, filter.dataPointer || filter.dataOffcut)
              .map(set => <SetItem key={set.code} details={set} />)
            : isLoading 
              ? <Spinner /> 
              : 'Sorry, no sets'
        }

        {
          (data.length - filter.dataPointer > 0 && data.length - filter.dataOffcut > 0) 
            && <ShowMore/>
        }
      </SetsListStyled>
    );
  }
}

export default SetsList;