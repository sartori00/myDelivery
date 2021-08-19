import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 20px;
`;

export const HighlightTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(22)}px;
  text-align: center;
  margin-bottom: 15px;
`;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
*/
