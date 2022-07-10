import React from 'react';
//import styled, { css } from 'react-emotion';
import * as PersonTileTypes from './__generated__/PersonTile';

interface PersonTileProps {
  person: PersonTileTypes.PersonTile;
}

const PersonTile = ({ person }: PersonTileProps) => {
  const { id, name } = person;
  return (
    <div>
      <p>Test ID: {id}</p>
      <p>Test Name: {name}</p>
    </div>
  );
};

export default PersonTile;

