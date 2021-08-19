import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface CategoryButtonProps extends RectButtonProps {
  title: string;
  active: boolean;
}

interface Props {
  active: boolean;
}

export const Container = styled(RectButton)<CategoryButtonProps>`
  height: 40px;
  width: auto;
  margin-right: 5px;
`;

export const Wrapper = styled.View<Props>`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.light_example};
      border-bottom-width: 5px;
    `}
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(13)}px;
  ${({ active }) =>
    active &&
    css`
      font-family: ${({ theme }) => theme.fonts.roboto700};
    `}
`;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
*/
