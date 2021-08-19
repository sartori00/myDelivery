import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.cardProduct};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  align-items: center;
  width: auto;
  height: auto;
  padding: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

export const ProductInfoPrincipal = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  width: ${RFValue(100)}px;
`;

export const ProductImage = styled.Image`
  border-radius: 15px;
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const ProductInfoSecondary = styled.View`
  height: 110px;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(110)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(12)}px;
  text-align: center;
  margin-bottom: 5px;
`;

export const FullPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.chivo400};
  color: ${({ theme }) => theme.colors.fullPrice};
  font-size: ${RFValue(12)}px;
  text-decoration: line-through;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.chivo400};
  color: ${({ theme }) => theme.colors.price};
  font-size: ${RFValue(16)}px;
`;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
*/
