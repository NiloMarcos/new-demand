import React, { useState, useEffect } from 'react';

import Icon from '@expo/vector-icons/Feather';

import Profile from '../../assets/profile.png';

import { Platform } from 'react-native';

import { Feather } from '@expo/vector-icons'

import Calendar from '../../assets/calendar.png';

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ContentSearch,
  Input,
  ContentGrettings,
  Grettings,
  Name,
  ContainerCardProjects,
  ContentCardProjectsTexts,
  ContentCardProjectsProfileImg,
  Title,
  SubTitle,
  LinkViewMore,
  LinkViewMoreText,
  Image,
  DailyReviewText,
  ContainerProject,
  ContentProjectAndHour,
  NameProject,
  ContentHourAndStatus,
  Hour,
  Status,
  ImageS
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const [ formInfo, setFormInfo ] = useState([]);
  const [ login, setLogin ] = useState([])

  // console.log('Agora é no seu state', formInfo)

  useEffect(() => {
    getData();
    getLogin();
  },[formInfo])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('infos');

      setFormInfo(JSON.parse(jsonValue) || []);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('Error no retorno das informações: ' + e.message)
    }
  };
  
  const getLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('login');

      setLogin(JSON.parse(jsonValue) || []);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('Error no retorno das informações: ' + e.message)
    }
  };

  return (
    <Container style={{ marginTop: Platform === 'ios' ? 50 : 30 }}>
      <ContentSearch>
        <Icon name='search' color='#9B9B9B' size={20} />
        <Input placeholder='Buscar projeto' />
      </ContentSearch>

      <ContentGrettings>
        <Grettings>Olá</Grettings>
        <Name>{login.name}</Name>
      </ContentGrettings>

      <ContainerCardProjects>
        <ContentCardProjectsTexts>
          <Title>Seus projetos</Title>
          <SubTitle>2 de 4 Completos</SubTitle>

          <LinkViewMore>
            <LinkViewMoreText>
              Ver mais
            </LinkViewMoreText>
          </LinkViewMore>
        </ContentCardProjectsTexts>

        <ContentCardProjectsProfileImg>
          <Image source={Profile} />
        </ContentCardProjectsProfileImg>
      </ContainerCardProjects>

      <DailyReviewText>Daily Review</DailyReviewText>

      <ContainerProject onPress={() => navigation.navigate('Details', { screen: 'Details' })}>
        <ImageS source={Calendar} />
        <ContentProjectAndHour>

          <NameProject>{formInfo?.nameproject}</NameProject>

          <ContentHourAndStatus>
            <Hour>{formInfo.notificationproject}</Hour>
            <Status>Finalizado</Status>
          </ContentHourAndStatus>
        </ContentProjectAndHour>

        <Feather name='chevron-right' size={20} color='#9B9B9B' />
      </ContainerProject>

    </Container>
  );
}
