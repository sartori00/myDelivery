import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  margin: 0 0 5px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
`;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
*/
