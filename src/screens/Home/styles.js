import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const ContentSearch = styled.View `
  flex-direction: row;
  align-items: center;

  padding: 13px 20px;
  margin-right: 28px;
  margin-left: 28px;

  background-color: ${({ theme }) => theme.colors.light_gray};

  border-radius: 14px;

  margin-top: 20px;
`;

export const Input = styled.TextInput `
  padding: 0 16px;
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

export const ContainerCardProjects = styled.View `
  background-color: ${({ theme }) => theme.colors.card};
  
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 24px;
  margin: 0 28px;
  
  border-radius: 28px;
`;

export const ContentCardProjectsTexts = styled.View `
  margin-right: 46px;
`;

export const ContentCardProjectsProfileImg = styled.View `

`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};

  max-width: 84px;
  padding-bottom: 2px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};

  opacity: .3;
  padding-bottom: 31px;
`;

export const LinkViewMore = styled.TouchableOpacity`
  
`;

export const LinkViewMoreText = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.red_opacity};

  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.red_opacity};
`;

export const Image = styled.Image`

`;

export const ScrollViewProjects = styled.ScrollView `

`;

export const DailyReviewText = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};

  padding: 20px 28px 12px;
`;

export const ContainerProject = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.light_gray};

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 30px 28px;
  margin: 0 28px 12px;

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

export const ImageS = styled.Image `

`;