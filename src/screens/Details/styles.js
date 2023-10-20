import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View `
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  padding: 0 28px;
`;

export const BackButton = styled.TouchableOpacity `
  width: 48px;
  height: 48px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light_gray};

  margin-top: ${getStatusBarHeight() + 25}px;
`;

export const Image = styled.Image `
  position: absolute;
  z-index: 999;
`;

export const Title = styled.Text `
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};

  padding-top: 32px;
`;
