import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  padding: 0 28px;

  justify-content: center;
  align-items: center;
`;

export const TypeProject = styled.View `
  margin-top: 12px;
`;

export const SubTitle = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ContentTypeProject = styled.View `
  background-color: ${({ theme }) => theme.colors.light_gray};

  flex-direction: row;
  justify-content: space-between;

  margin: 14px 0 24px 0;
  padding: 14px;

  position: relative;
`;

export const Icon = styled.Image `

`;

export const Project = styled.TextInput `
  position: absolute;
  left: 52px;
  top: 12px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};

  align-items: center;
`;

export const QrCodeProject = styled.TouchableOpacity `

`;

export const UrgencyAndTime = styled.Text `

`;

export const ContentSelect = styled.View `

`;

export const Needs = styled.View `

`;

export const TypeNeNecessity = styled.View `

`;

export const Input = styled.TextInput `
  background-color: ${({ theme }) => theme.colors.light_gray};
  height: 50px;
  padding: 14px;

`;

export const SendForm = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  height: 56px;

  border-radius: 14px;

  margin-top: 72px;
`;

export const SendFormText = styled.Text `
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const BackButton = styled.TouchableOpacity `
  width: 48px;
  height: 48px;
  border-radius: 14px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const Image = styled.Image `
  position: absolute;
  z-index: 999;
`;