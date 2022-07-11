import React, { Fragment, useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import { Col, Container, Row } from '@mverissimoo/emotion-grid';
import styled from '@emotion/styled';
import { lighten } from 'polished';

import{PersonTile, Loading} from './index'
import * as GetPersonListTypes from './__generated__/GetPersonList';
import {unit, colors, } from '../styles'

export const PERSON_TILE_DATA = gql`
  fragment PersonTile on Person{
    __typename
    id
    name
    address
    email
    phoneNumber
  }
`;

export const GET_PERSONS = gql`
  query GetPersonList($after: String) {
    persons(after: $after) {
      cursor
      hasMore
      persons {
        ...PersonTile
      }
    }
  }
  ${PERSON_TILE_DATA}
`;

const Persons = ({ }) => {
  const { data, loading, error, fetchMore } = useQuery<GetPersonListTypes.GetPersonList, GetPersonListTypes.GetPersonListVariables>(GET_PERSONS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <Loading />;
  if (error || !data) return <p>Error!</p>;

  return (
    <Fragment>
      <Container>
        <Row>
          {data.persons &&
            data.persons.persons &&
            data.persons.persons.map((person: any) => (
              <Col xs={4} sm={4} md={4} lg={3} xl={3} key={person.id}>
                <PersonTile person={person} />
              </Col>
            ))}
        </Row>
      </Container>

      {data.persons &&
        data.persons.hasMore &&
        (isLoadingMore ? (
          <Loading />
        ) : (
          <Button
            onClick={async () => {
              setIsLoadingMore(true);
              await fetchMore({ variables: { after: data.persons.cursor } });
              setIsLoadingMore(false);
            }}
          >
            Load more...
          </Button>
        ))}
    </Fragment>
  );
};

export default Persons;

/* STYLED COMPONENTS */
const height = 50;
const Button = styled.button({
  display: 'block',
  minWidth: 200,
  height,
  margin: '0 auto',
  padding: `0 ${unit * 4}px`,
  border: 'none',
  borderRadius: height / 2,
  fontFamily: 'inherit',
  fontSize: 18,
  lineHeight: `${height}px`,
  fontWeight: 700,
  color: 'white',
  textTransform: 'uppercase',
  backgroundColor: colors.accent,
  cursor: 'pointer',
  outline: 'none',
  ':hover': {
    backgroundColor: lighten(0.1, colors.accent),
  },
  ':active': {
    backgroundColor: lighten(0.2, colors.accent),
  },
});