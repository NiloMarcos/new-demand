import styled from "styled-components/native";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  margin: 0 28px;
  flex: 1;
`;

export const ScrollViewProjects = styled.ScrollView `

`;

export const DailyReviewText = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};

  padding: 20px 0 12px;
`;

export const ContainerProject = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.light_gray};

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 30px 28px;
  margin-bottom: 12px;

  border-radius: 24px;
`;

export const ContentProjectAndHour = styled.View `
  position: absolute;
  left: 64px;
`;

export const NameProject = styled.Text `
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ContentHourAndStatus = styled.View `
  flex-direction: row;
`;

export const  Hour = styled.Text `
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const  Status = styled.Text `
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_gray};

  padding-left: 5px;
`;

