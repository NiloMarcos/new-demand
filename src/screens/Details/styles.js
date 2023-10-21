import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
  padding: 52px 28px;

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

  margin-top: 20px;
`;

export const SendFormText = styled.Text `
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;


export const Image = styled.Image `
  position: absolute;
  z-index: 999;
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

export const InputProject = styled.TextInput `
  width: 80%;
`;

export const WrapperFormUrgency = styled.View `
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;

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

  width: 100%;
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

export const TextInfo = styled.Text `
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  padding-left: 15px;
`;