import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
  flex: 1;
`;

export const TypeProject = styled.View `
  margin: 14px 0 24px;
`;

export const Title = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};

  margin-bottom: 10px;
`;

export const ProjectContent = styled.View `
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 14px;

  background-color: ${({ theme }) => theme.colors.light_gray};

  height: 48px;

  border-radius: 14px;
`;

export const Link = styled.TouchableOpacity `

`;

export const Icon = styled.Image `
  opacity: 1;
`;

export const InputProject = styled.TextInput `
  /* position: absolute;
  left: 52px; */

  width: 80%;
`;

export const UrgencyAndTime = styled.View `

`;

export const WrapperFormUrgency = styled.View `
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

`;

export const ContentUrgency = styled.View `
  background-color: ${({ theme }) => theme.colors.light_gray};
  
  flex-direction: row;
  align-items: center;

  padding: 16px;

  width: 45%;
  height: 48px;

  border-radius: 14px;

`;

export const ContentTime = styled.View `
  background-color: ${({ theme }) => theme.colors.light_gray};

  flex-direction: row;
  align-items: center;

  padding: 16px;

  width: 45%;
  height: 48px;

  border-radius: 14px;
`;

export const InputUrgency = styled.TextInput `
  padding-left: 14px;
`;

export const Necessity = styled.View `
  margin: 24px 0;
`;

export const NecessitySelect = styled.View `
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SelectNecessity = styled.TouchableOpacity `
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.light_gray};

  height: 90px;
  width: 96px;

  margin: 0 auto;

  border-radius: 14px;
`;

export const SelectNecessityImage = styled.Image `
  justify-content: center;

  
`;

export const TextSelect = styled.Text `
  font-size: ${RFValue(6)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};

  text-align: center;

  margin-top: 17px;
`;

export const Notification = styled.View `
`;

export const NotificationContentInput = styled.View `
  background-color: ${({ theme }) => theme.colors.light_gray};

  flex-direction: row;
  align-items: center;

  padding: 14px;

  width: 80%;
  height: 48px;

  border-radius: 14px;
`;

export const ContentInputButton = styled.View `
  flex-direction: row;
  align-items: center;

`;

export const ButtonPlus = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.card};

  opacity: .3;

  justify-content: center;
  align-items: center;

  width: 15%;
  height: 48px;

  border-radius: 14px;

  margin-left: 16px;
`;

export const ButtonSend = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  height: 56px;

  border-radius: 14px;

  margin-top: 72px;
`;

export const TextSend = styled.Text `
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;
