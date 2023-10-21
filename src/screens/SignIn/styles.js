import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
  justify-content: center;
  align-items: center;

  flex: 1;

  margin: 0 28px;
`;

export const Title = styled.Text `
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};

  text-transform: uppercase;

  margin-bottom: 20px;
`;

export const Input = styled.TextInput `
  width: 100%;
  height: 60px;

  padding: 15px;

  border-radius: 14px;

  background-color: ${({ theme }) => theme.colors.light_gray};

`;

export const Button = styled.TouchableOpacity `
  width: 100%;
  height: 50px;

  margin-top: 20px;

  justify-content: center;
  align-items: center;

  border-radius: 14px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text `
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Text = styled.Text `

`;
 