import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;

  height: ${RFValue(360)}px;
`;

export const HeaderImage = styled.Image.attrs({
  blurRadius: 2,
})`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
  height: ${RFValue(150)}px;
`;

export const SearchBox = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight() + RFValue(5)}px;
  right: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 100px;
`;

export const SearchIcon = styled(MaterialCommunityIcons)`
  padding: 12px;
  color: ${({ theme }) => theme.colors.cardProduct};
`;

export const LogoImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 75px;
  background-color: ${({ theme }) => theme.colors.attention};
  position: absolute;
  top: ${RFValue(100)}px;
  right: ${Dimensions.get('window').width / 2 - 70}px;
`;

export const Infos = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 5px;
`;
export const OpenBox = styled.View`
  width: 32%;
  align-items: center;
  justify-content: center;
`;
export const OpenInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;
export const ClockIcon = styled(MaterialCommunityIcons)``;

export const OnlineBox = styled.View`
  width: 35%;
  align-items: center;
`;

export const FlagOnline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const FlagText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;

  margin-right: 5px;
`;

export const OnlineIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.offline};
`;

export const AboutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.light_example};
  padding: 5px 12px;
  border-radius: 5px;
`;
export const AboutText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(13)}px;

  margin-right: 5px;
`;
export const AboutIcon = styled(MaterialIcons)``;

export const FooterHeader = styled.View`
  align-items: center;
`;

export const CompanyName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto700};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(28)}px;
  margin-bottom: 20px;
`;
export const EstimateTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(13)}px;
`;

export const Underline = styled.Text``;

/*
  font-family: ${({ theme }) => theme.fonts.}; 
  background-color: ${({ theme }) => theme.colors.}; 
  font-size: ${RFValue(10)}px; 
  .attrs({
  blurRadius: 8,
  
})
  
  width: 100%;
  height: ${RFValue(180)}px;
*/
