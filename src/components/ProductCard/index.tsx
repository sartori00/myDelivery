import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Wrapper,
  Photo,
  PriceBox,
  FinalPrice,
  FullPrice,
  ProductInfoBox,
  ProductInfo,
  ProductTitle,
  ProductDescription,
} from './styles';

interface Props extends RectButtonProps {
  uriImagem?: string;
  tituloProduto: string;
  descProduto?: string;
  precoFinal: string;
  precoCheio?: string;
}

export function ProductCard({ uriImagem, tituloProduto, descProduto, precoFinal, precoCheio }: Props) {
  return (
    <Container>
      <Wrapper>
        <Photo
          source={{
            uri: uriImagem,
          }}
        />
        <ProductInfoBox>
          <ProductInfo>
            <ProductTitle>{tituloProduto} </ProductTitle>
            <ProductDescription>{descProduto}</ProductDescription>
          </ProductInfo>

          <PriceBox>
            {precoCheio ? <FullPrice>R$ {precoCheio}</FullPrice> : <></>}
            <FinalPrice>R$ {precoFinal}</FinalPrice>
          </PriceBox>
        </ProductInfoBox>
      </Wrapper>
    </Container>
  );
}
