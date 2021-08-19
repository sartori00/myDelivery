import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.cardProduct};
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Photo = styled.Image`
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  margin-right: 20px;
`;

export const ProductInfoBox = styled.View`
  margin: 10px 0;
  justify-content: space-between;

  width: 190px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  width: 180px;
`;

export const ProductTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(10)}px;
`;

export const PriceBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const FinalPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: ${({ theme }) => theme.colors.price};
  font-size: ${RFValue(18)}px;
  margin-left: 10px;
`;

export const FullPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.chivo400};
  color: ${({ theme }) => theme.colors.fullPrice};
  font-size: ${RFValue(12)}px;
  text-decoration: line-through;
  margin-bottom: 5px;
`;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
*/
