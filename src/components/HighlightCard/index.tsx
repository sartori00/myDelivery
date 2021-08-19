import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  ProductInfoPrincipal,
  ProductImage,
  Title,
  ProductInfoSecondary,
  Description,
  FullPrice,
  Price,
} from './styles';

interface Props extends RectButtonProps {
  imagem: string;
  titulo: string;
  descricao?: string;
  precoCheio?: string;
  precoFinal: string;
}

export function HighlightCard({ imagem, titulo, descricao, precoCheio, precoFinal, ...rest }: Props) {
  return (
    <Container {...rest}>
      <ProductInfoPrincipal>
        <ProductImage source={{ uri: imagem }} />
        <Title>{titulo}</Title>
      </ProductInfoPrincipal>
      <ProductInfoSecondary>
        {descricao ? <Description>{descricao}</Description> : <Text> </Text>}
        {precoCheio ? <FullPrice>R$ {precoCheio}</FullPrice> : <Text> </Text>}
        <Price>R$ {precoFinal}</Price>
      </ProductInfoSecondary>
    </Container>
  );
}
