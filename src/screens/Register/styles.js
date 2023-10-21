import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  margin: 0 28px;
`;

export const Title = styled.Text `
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const BackButton = styled.TouchableOpacity `
  width: 48px;
  height: 48px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light_gray};

  margin-top: 30px;
`;

export const Image = styled.Image `

`;
