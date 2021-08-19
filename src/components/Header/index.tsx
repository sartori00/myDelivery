import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
  Container,
  HeaderImage,
  SearchIcon,
  LogoImage,
  Infos,
  OpenBox,
  OpenInfo,
  ClockIcon,
  OnlineBox,
  FlagOnline,
  AboutButton,
  AboutIcon,
  AboutText,
  OnlineIcon,
  FlagText,
  CompanyName,
  EstimateTime,
  FooterHeader,
  Underline,
  SearchBox,
} from './styles';

interface Props {
  imagemFundo?: string;
  imagemLogo?: string;
  disponibilidade: number;
  horaDisponibilidade: string;
  nomeEmpresa: string;
  tempoEstimadoMin: string;
  tempoEstimadoMax: string;
}

export function Header({
  disponibilidade,
  horaDisponibilidade,
  nomeEmpresa,
  tempoEstimadoMin,
  tempoEstimadoMax,
  imagemLogo,
  imagemFundo,
}: Props) {
  let textOpenInfo = '';

  if (disponibilidade === 1) {
    textOpenInfo = `Aberto até ${horaDisponibilidade}`;
  } else if (disponibilidade === 2) {
    textOpenInfo = `Abre amanhã as ${horaDisponibilidade}`;
  } else {
    textOpenInfo = `Temporariamente indisponível, por gentileza, tente novamente mais tarde.`;
  }

  return (
    <Container>
      {/* <HeaderImage source={require('../../assets/headerBackground.jpg')} /> */}
      <HeaderImage source={{ uri: imagemFundo }} />
      <SearchBox>
        <SearchIcon name="magnify" size={34} />
      </SearchBox>
      {/* <LogoImage source={require('../../assets/logo.jpg')} /> */}
      <LogoImage source={{ uri: imagemLogo }} />
      <Infos>
        <OpenBox>
          <OpenInfo> {textOpenInfo}</OpenInfo>

          <ClockIcon name="clock-fast" size={24} />
        </OpenBox>
        <OnlineBox>
          {/*           <FlagOnline>
            {!online && <FlagText> Indisponível</FlagText>}
            {!online && <OnlineIcon name="circle" />}
          </FlagOnline> */}
          <AboutButton>
            <AboutText>Sobre Nós</AboutText>
            <AboutIcon name="arrow-forward-ios" />
          </AboutButton>
        </OnlineBox>
      </Infos>
      <FooterHeader>
        <CompanyName>{nomeEmpresa}</CompanyName>
        <EstimateTime>
          Tempo estimado de entrega: {tempoEstimadoMin} ~ {tempoEstimadoMax}
        </EstimateTime>
        <Underline>______________________________________________________</Underline>
      </FooterHeader>
    </Container>
  );
}
