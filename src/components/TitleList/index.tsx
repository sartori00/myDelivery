import React from 'react';
import DividerSvg from '../../assets/SVG/divider.svg';

import { Container, Title } from './styles';

interface Props {
  title: string;
}

export function TitleList({ title }: Props) {
  return (
    <Container>
      <Title> {title} </Title>
      <Title>________________</Title>
    </Container>
  );
}
