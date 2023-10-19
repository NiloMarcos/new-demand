import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const ContentSearch = styled.View `
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */


  padding: 13px 20px;
  margin-top: ${getStatusBarHeight() + 22}px;
  margin-right: 28px;
  margin-left: 28px;

  background-color: ${({ theme }) => theme.colors.light_gray};

  border-radius: 14px;
`;

export const Input = styled.TextInput `
  padding: 13px 16px;
`;

export const ContentGrettings = styled.View `
  margin: 36px 0 16px 28px;
`;

export const Grettings = styled.Text `
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Name = styled.Text `
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;


// ...