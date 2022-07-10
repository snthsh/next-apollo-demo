import React from 'react';
import styled from '@emotion/styled';

import * as PersonTileTypes from './__generated__/PersonTile';

interface PersonTileProps {
  person: PersonTileTypes.PersonTile;
}

const PersonTile = ({ person }: PersonTileProps) => {
  const { name, address, email, phoneNumber } = person;
  return (
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{address}</CardText>
        <CardText>{email}</CardText>
        <CardText>{phoneNumber}</CardText>
      </CardBody>
    </Card>
  );
};

/* STYLED COMPONENT */
const Card = styled.div({
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  wordWrap: 'break-word',
  height: '270px',
  minHeight: '250px',
  marginBottom: '2rem',
});

const CardBody = styled.div({
  padding: '1.5rem'
});

const CardTitle = styled.h5({
  fontSize: '1.25rem',
  fontWeight: '500',
  lineHeight: '1.2',
  margin: 0
});

const CardText = styled.p({
  fontWeight: '300',
});

export default PersonTile;

