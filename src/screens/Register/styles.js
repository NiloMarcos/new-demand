import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  margin: 0 28px;
`;

export const Title = styled.Text `
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};

  padding-top: 32px;
`;