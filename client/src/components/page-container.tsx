import React, {Fragment} from 'react';
import styled from '@emotion/styled';

import { unit, colors } from '../styles';

export default function PageContainer({ children}:any) {
  return (
    <Fragment>
      <Bar />
      <Title>Next Apollo - Infinite Scroll</Title>
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  )
}

/*
  STYLED COMPONENTS
*/

const Bar = styled.div({
  flexShrink: 0,
  height: 12,
  backgroundColor: colors.primary,
});

const Title = styled.h1({
  textAlign: 'center',
  margin: '2rem 0'
})

const Container = styled.div({
  flexWrap: 'wrap',
  margin: '0 auto',
});

const Footer = styled.footer({
  flexShrink: 0,
  height: '25px',
  backgroundColor: '#e535ab',
  marginTop: '2rem'
});