import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Wrapper } from './styles';

interface CategoryButtonProps extends RectButtonProps {
  categoria: string;
  active?: boolean;
}

export function CategoryButton({ categoria, active = false, ...rest }: CategoryButtonProps) {
  return (
    <Container title={categoria} active={active} {...rest}>
      <Wrapper active={active}>
        <Title active={active}> {categoria} </Title>
      </Wrapper>
    </Container>
  );
}
